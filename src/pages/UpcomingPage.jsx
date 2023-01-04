import { lazy, Suspense, useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/moviesAPI';
import CardMovie from '../components/CardMovie';
const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getUpcomingMovies();
      setMovies(res);
    })();
  }, []);

  return (
    <div className='upcoming'>
      <div className='upcoming__content ml-padding'>
        <h1 className='upcoming__title'>Próximas películas</h1>
        <CardMovie movies={movies} />
      </div>
    </div>
  );
};

export default UpcomingPage;
