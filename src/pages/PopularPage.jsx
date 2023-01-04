import { useEffect, useState, lazy, Suspense } from 'react';
import { getPopularMovies } from '../api/moviesAPI';
import CardMovie from '../components/CardMovie';
import CardMovieSkeleton from '../components/CardMovieSkeleton';
import Loader from '../components/Loader';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedIds, setLoadedIds] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPopularMovies(page);
      setMovies(data.filter((movie) => !loadedIds.includes(movie.id)));
      setLoadedIds((prevLoadedIds) => [
        ...prevLoadedIds,
        ...data.map((movie) => movie.id),
      ]);
      setIsLoading(false);
    })();
  }, []);

  const [setLastItemRef] = useInfiniteScroll(() => {
    const getMoreData = async () => {
      const data = await getPopularMovies(page + 1);
      if (data.length > 0) {
        const newMovies = data.filter((movie) => !loadedIds.includes(movie.id));
        setMovies((prevMovies) => prevMovies.concat(newMovies));
        setLoadedIds((prevLoadedIds) => [
          ...prevLoadedIds,
          ...newMovies.map((movie) => movie.id),
        ]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    };
    getMoreData();
  });

  return (
    <div className='popular-page'>
      <div className='popular ml-padding'>
        <h1 className='popular__title '>Películas populares</h1>

        {isLoading ? (
          <CardMovieSkeleton />
        ) : (
          <Suspense fallback={<CardMovieSkeleton />}>
            <CardMovie movies={movies} />
          </Suspense>
        )}
        {hasMore ? (
          <div
            ref={setLastItemRef}
            style={{
              padding: '1rem 0',
            }}
          >
            <Loader color='rgb(15, 23, 42)' justify='center' />
          </div>
        ) : (
          <p>No hay más películas para cargar</p>
        )}
      </div>
    </div>
  );
};

export default PopularPage;
