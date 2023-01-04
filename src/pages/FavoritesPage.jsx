import React, { useState } from 'react';
import CardMovie from '../components/CardMovie';
const FavoritesPage = () => {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const handleRemoveFromFavorites = (movie) => {
    setMovies(movies.filter((item) => item.id !== movie.id));
  };

  return (
    <div className='favorites-page'>
      <div className='favorites ml-padding'>
        <h1 className='favorites__title'>Películas favoritas</h1>
        {movies.length === 0 ? (
          <div>Nada por aquí, Anda y agregalas!</div>
        ) : (
          <CardMovie
            movies={movies}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
