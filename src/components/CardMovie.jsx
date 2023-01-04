import { useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CardMovie = ({ movies, horizontal }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const handleButtonClick = (movie) => {
    if (favorites.find((item) => item.id === movie.id)) {
      setFavorites(favorites.filter((item) => item.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(favorites);
  };

  const averageColor = (vote) => {
    const block = 'card-movie__average';
    if (vote <= 3.3) {
      return `${block}--low`;
    } else if (vote <= 6.6) {
      return `${block}--medium`;
    }
    return `${block}--full`;
  };

  return (
    <div className={`cards-movie${horizontal ? '-h' : ''}`}>
      {movies.map((movie) => (
        <div className={`card-movie${horizontal ? '-h' : ''}`} key={movie.id}>
          <div className={`card-movie${horizontal ? '-h' : ''}__header`}>
            <img
              className={`card-movie${horizontal ? '-h' : ''}__img`}
              src={`${
                !horizontal
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              }`}
              // loading={!horizontal && 'lazy'}
              alt={movie.title}
            />

            <button
              onClick={() => handleButtonClick(movie)}
              className={`card-movie${horizontal ? '-h' : ''}__heart-ad`}
              style={{
                color: favorites.find((item) => item.id === movie.id)
                  ? 'red'
                  : 'white',
              }}
            >
              <BsHeartFill />
            </button>
          </div>
          <div className={`card-movie${horizontal ? '-h' : ''}__body`}>
            <Link
              to={`/movie/${movie.id}`}
              className={`card-movie${horizontal ? '-h' : ''}__title`}
            >
              {movie.title}
            </Link>
            <time
              className={`card-movie${horizontal ? '-h' : ''}__release`}
              dateTime={movie.release_date}
            >
              {movie.release_date}
            </time>
            <span
              className={` ${averageColor(movie.vote_average)} card-movie${
                horizontal ? '-h' : ''
              }__average`}
            >
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMovie;
