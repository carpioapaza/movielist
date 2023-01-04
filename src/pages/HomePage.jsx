import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLatesMovie, getSimilarMovies } from '../api/moviesAPI';
import CardMovie from '../components/CardMovie';

const HomePage = () => {
  const [latestMovie, setLatestMovie] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchLatestMovie = async () => {
      const data = await getLatesMovie();
      const random = Math.floor(Math.random() * (20 - 0) + 0);
      setLatestMovie(data[random]);
    };
    fetchLatestMovie();
  }, []);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      if (latestMovie.id) {
        const data = await getSimilarMovies(latestMovie.id);
        setSimilarMovies(data);
      }
    };
    fetchSimilarMovies();
  }, [latestMovie]);

  return (
    <div className='home'>
      <div
        className='home__hero'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
          ,url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${latestMovie.poster_path})`,
        }}
      >
        <div className='home__hero-content ml-padding'>
          <div className='home__hero-info'>
            <div className='home__hero-left'>
              <h1 className='home__hero-title'>{latestMovie.title}</h1>
              <p className='home__hero-overview'>{latestMovie.overview}</p>
              <Link className='home__hero-cta' to={`movie/${latestMovie.id}`}>
                Ver más
              </Link>
            </div>
            <div className='home__hero-right'>
              <img
                className='home__hero-poster'
                src={`https://image.tmdb.org/t/p/original/${latestMovie.poster_path}`}
              />
            </div>
          </div>
          {/* <div className='home__hero-similar'>
            <h1 className='home__hero-similar-title'>Peliculas similares</h1>
            <CardMovie movies={similarMovies} horizontal />
          </div> */}
        </div>
      </div>
      <div>xd</div>
    </div>
  );
};

export default HomePage;
