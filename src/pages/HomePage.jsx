import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getNowPlaying,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../api/moviesAPI';
import CardMovie from '../components/CardMovie';
import Loader from '../components/Loader';

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const random = Math.floor(Math.random() * (20 - 0) + 0);
  const { poster_path, title, overview, id } = nowPlaying;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const [nowPlaying, popularMovies, upcomingMovies, topRatedMovies] =
        await Promise.all([
          getNowPlaying(),
          getPopularMovies(1),
          getUpcomingMovies(1),
          getTopRatedMovies(1),
        ]);
      setNowPlaying(nowPlaying[random]);
      setPopularMovies(popularMovies);
      setUpcomingMovies(upcomingMovies);
      setTopRatedMovies(topRatedMovies);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={`home ${isLoading ? 'ml-padding home--loading' : ''}`}>
      {isLoading ? (
        <>
          <div className='home--header-loading'></div>
          <Loader />
        </>
      ) : (
        <>
          <div
            className='home__hero'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
          ,url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${poster_path})`,
            }}
          >
            <div className='home__hero-content ml-padding'>
              <div className='home__hero-info'>
                <div className='home__hero-left'>
                  <h1 className='home__hero-title'>{title}</h1>
                  <p className='home__hero-overview'>{overview}</p>
                  <Link className='home__hero-cta' to={`movie/${id}`}>
                    Ver más
                  </Link>
                </div>
                <div className='home__hero-right'>
                  <img
                    className='home__hero-poster'
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='home__more ml-padding'>
            <div className='home__more-popular-movies'>
              <h2 className='home__more-popular-movies-title'>
                <Link to={`/popular`}>Peliculas populares</Link>
              </h2>
              <CardMovie movies={popularMovies.slice(0, 8)} horizontal />
            </div>

            <div className='home__more-upcoming-movies'>
              <h3 className='home__more-upcoming-movies-title'>
                <Link to={`/upcoming`}>Próximas películas</Link>
              </h3>
              <CardMovie movies={upcomingMovies.slice(0, 7)} />
            </div>

            <div className='home__more-top-rated-movies'>
              <h4 className='home__more-top-rated-movies-title'>
                <Link to={`/upcoming`}>Peliculas más valoradas</Link>
              </h4>
              <CardMovie movies={topRatedMovies.slice(0, 8)} horizontal />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
