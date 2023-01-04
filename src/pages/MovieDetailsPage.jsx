import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getCredits,
  getDetails,
  getImages,
  getRecommendations,
  getSimilarMovies,
  getVideos,
} from '../api/moviesAPI';
import CardMovie from '../components/CardMovie';
import CardPeople from '../components/CardPeople';
import Loader from '../components/Loader';
import DetailsHero from '../components/movieDetails/DetailsHero';
import MediaMovie from '../components/movieDetails/MediaMovie';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const movie = await getDetails(id);
        const images = await getImages(id);
        const videos = await getVideos(id);
        const credits = await getCredits(id);
        const similar = await getSimilarMovies(id);
        const recomendations = await getRecommendations(id);
        setMovieDetails({
          data: { ...movie, images, videos, credits, similar, recomendations },
          isLoading: false,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [id]);

  // END

  const {
    data,
    data: { similar, recomendations, credits: { cast: persons } = {} },
    isLoading,
  } = movieDetails;

  // const cast = { ...movieDetails.data.credits.cast } || [];

  return (
    <div className={`details-page ${isLoading ? 'details-page--loading' : ''}`}>
      {isLoading ? (
        <Loader color='#0F172A' w='5rem' />
      ) : (
        <>
          <DetailsHero movieDetails={data} />
          <div className='details ml-padding'>
            <div className='details__people'>
              <p className='details__people-title'>Recomendaciones</p>
              <CardPeople persons={persons} />
            </div>

            <div className='details__media'>
              <MediaMovie movie={data} />
            </div>

            <div className='details__similar'>
              <p className='details__similar-title'>Peliculas Similares</p>
              <CardMovie movies={similar} horizontal />
            </div>

            <div className='details__recomendations'>
              <p className='details__recomendations-title'>Recomendaciones</p>
              <CardMovie movies={recomendations} horizontal />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
