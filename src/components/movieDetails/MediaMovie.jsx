import { useState } from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';
// ctrl + k + u
const MediaMovie = ({ movie }) => {
  const {
    images: { posters, backdrops },
    videos,
  } = movie;

  const filters = [
    { value: 'backdrops', label: 'Imágenes de fondo', size: backdrops.length },
    { value: 'posters', label: 'Posters', size: posters.length },
    { value: 'videos', label: 'Videos', size: videos.length },
  ];

  const validFilters = filters.filter((item) => item.size > 0);
  const values = validFilters.map((filter) => filter.value);
  const [currentFilter, setCurrentFilter] = useState(values[0]);

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div className='media-movie '>
      <div className='media-movie__top'>
        <p className='media-movie__top-title'>Media</p>
        <ul className='media-movie__top-filters'>
          {filters.map((filter) =>
            filter.size >= 1 ? (
              <li
                className={`media-movie__top-filter ${
                  currentFilter == filter.value
                    ? 'media-movie__top-filter--active'
                    : ''
                }`}
                key={filter.value}
              >
                <button
                  className='media-movie__top-filter-link'
                  onClick={() => handleFilterClick(filter.value)}
                >
                  {filter.label} <span> ({filter.size})</span>
                </button>
              </li>
            ) : null
          )}
        </ul>
        <span className='media-movie__top-more-media'>
          <Link className='media-movie__top-more-media-link' to={'media'}>
            Ver todo <GrFormNextLink />
          </Link>
        </span>
      </div>
      <div className='media-movie__bottom'>
        <div className='media-movie__bottom-container'>
          {currentFilter === 'backdrops' &&
            backdrops.slice(0, 5).map((backdrop, i) => (
              <div
                className='media-movie__bottom-content media-movie__bottom-content--backdrops'
                key={i}
              >
                <img
                  className='media-movie__bottom-content-img'
                  src={`https://image.tmdb.org/t/p/original/${backdrop.file_path}`}
                  alt={`Imagen de fondo de ${movie.title}`}
                />
              </div>
            ))}
          {currentFilter === 'videos' &&
            videos.slice(0, 5).map((video) => (
              <div
                className='media-movie__bottom-content media-movie__bottom-content--videos'
                key={video.id}
              >
                <div className='media-movie__bottom-content-img'>
                  <iframe
                    width='560'
                    height='315'
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          {currentFilter === 'posters' &&
            posters.slice(0, 5).map((poster, i) => (
              <div
                className='media-movie__bottom-content media-movie__bottom-content--posters'
                key={i}
              >
                <img
                  className='media-movie__bottom-content-img'
                  src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                  alt={`Poster de ${movie.title}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MediaMovie;
