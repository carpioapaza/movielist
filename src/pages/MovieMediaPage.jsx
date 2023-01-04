import React, { useEffect, useState } from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getDetails, getImages, getVideos } from '../api/moviesAPI';

const MovieMediaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    media: {},
    loading: true,
  });
  const loading = data.loading;

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const details = await getDetails(id);
        const { title, poster_path } = details;
        const images = await getImages(id);
        const videos = await getVideos(id);
        setData({
          media: { title, poster_path, images, videos },
          loading: false,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchMedia();
  }, []);

  if (loading) {
    return <div style={{ scale: 1.9 }}>No se doned estoy cargando xD</div>;
  }
  const {
    media: {
      title,
      poster_path,
      images: { logos, backdrops, posters },
      videos,
    },
  } = data;

  console.log(backdrops);

  return (
    <div className='movie-media'>
      <div className='movie-media__content ml-padding'>
        <h1 className='movie-media__title'>Media</h1>

        <div className='movie-media__movie'>
          <img
            onClick={() => navigate(-1)}
            className='movie-media__movie-poster'
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={`Poster de la pelicula: ${title}`}
          />
          <div className='movie-media__movie-text'>
            <Link className='movie-media__movie-text-title' to={`/movie/${id}`}>
              {title}
            </Link>
            <span className='movie-media__movie-text-back'>
              {' '}
              <GrFormPreviousLink /> Atras
            </span>
          </div>
        </div>
        {videos.length >= 1 ? (
          <div className='movie-media__videos'>
            <div className='movie-media__videos-title'>Videos</div>
            <div className='movie-media__videos-container'>
              {videos.map((video, i) => (
                <div className='movie-media__videos-card' key={i}>
                  <iframe
                    loading='lazy'
                    width='560'
                    height='315'
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {posters.length >= 1 ? (
          <div className='movie-media__posters'>
            <div className='movie-media__posters-title'>Posteres</div>
            <div className='movie-media__posters-container'>
              {posters.map((poster, i) => (
                <div className='movie-media__posters-card' key={i}>
                  <img
                    loading='lazy'
                    src={`https://image.tmdb.org/t/p/original${poster.file_path}`}
                    alt={`Poster de la Pelicula ${title}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {backdrops.length >= 1 ? (
          <div className='movie-media__backdrops'>
            <div className='movie-media__backdrops-title'>
              Imágenes de fondo
            </div>
            <div className='movie-media__backdrops-container'>
              {backdrops.map((backdrop, i) => (
                <div className='movie-media__backdrops-card' key={i}>
                  <img
                    loading='lazy'
                    src={`https://image.tmdb.org/t/p/original/${backdrop.file_path}`}
                    alt={`Imagen de fondo de ${title}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieMediaPage;
