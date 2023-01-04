import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getGenres, getPopularMovies } from '../api/moviesAPI';
import CardMovie from '../components/CardMovie';
const GenresPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const param = useParams();
  const genreId = parseInt(param.id);

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
    getPopularMovies().then((response) => setMovies(response));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.genre_ids.includes(genreId)
  );

  const activeGenre = (id) => {
    if (id === genreId) {
      return 'genre__item--active';
    } else return '';
  };

  return (
    <div className='genre'>
      <div className='genre__content ml-padding'>
        <h1 className='genre__title'>Generos</h1>
        <ul className='genre__list'>
          {genres.map((genre) => (
            <li
              className={`genre__item ${activeGenre(genre.id)}`}
              key={genre.id}
            >
              <Link className='genre__link' to={`/movies/${genre.id}`}>
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
        <CardMovie movies={filteredMovies} />
      </div>
    </div>
  );
};

export default GenresPage;
