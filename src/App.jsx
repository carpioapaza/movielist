import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GenresPage from './pages/GenresPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import PopularPage from './pages/PopularPage';
import FavoritesPage from './pages/FavoritesPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieMediaPage from './pages/MovieMediaPage';
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/popular' element={<PopularPage />} />
        <Route path='/upcoming' element={<UpcomingPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/movie/:id' element={<MovieDetailsPage />} />
        <Route path='/movie/:id/media' element={<MovieMediaPage />} />
        <Route path='/movies/:id' element={<GenresPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
