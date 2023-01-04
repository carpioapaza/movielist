import { useEffect, useState } from 'react';

const useFavorites = () => {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);

  const addToFavorites = (movie) => {
    if (!favorites.find((item) => item.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movie) => {
    const updatedFavorites = favorites.filter((item) => item.id !== movie.id);
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, addToFavorites, removeFromFavorites };
};

export default useFavorites;
