import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { TbMinusVertical } from 'react-icons/tb';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const DetailsHero = ({ movieDetails: movie }) => {
  const minToHours = (runtime) => {
    if (runtime >= 60) {
      const hours = Math.floor(runtime / 60);
      const remainingMinutes = runtime % 60;
      return `${hours}h${remainingMinutes}m`;
    } else {
      return `${runtime}m`;
    }
  };

  const imageSize = (value) => {
    if (value < 285) {
      return 'details-hero__logo-container--max';
    } else return '';
  };

  const {
    images: { logos },
  } = movie;

  function getRandomLogo(obj) {
    const indexRandom = Math.floor(Math.random() * obj.length);
    return obj[indexRandom];
  }
  const logoRandom = getRandomLogo(logos);
  const isSmallScreen = useMediaQuery('(max-width: 576px)');

  return (
    <>
      <div
        className='details-hero'
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 93%), rgb(58 58 58 / 86%), rgba(12, 12, 12, 0.33), transparent),url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
        }}
      >
        <div className='details-hero__content ml-padding'>
          {isSmallScreen ? (
            <div className='details-hero__left'>
              <img
                className='details-hero__poster'
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
          ) : null}
          {!isSmallScreen ? (
            <div className='details-hero__right'>
              <div className='details-hero__info'>
                {logoRandom ? (
                  <div
                    className={`details-hero__logo-container ${imageSize(
                      logoRandom.height
                    )}`}
                  >
                    <img
                      className='details-hero__logo'
                      src={`https://image.tmdb.org/t/p/original/${logoRandom.file_path}`}
                      alt={movie.title}
                    />
                  </div>
                ) : null}
                <div className='details-hero__details-info'>
                  <h1
                    className={`details-hero__title ${
                      logoRandom ? '' : 'details-hero__title--font'
                    }`}
                  >
                    {movie.title}
                  </h1>
                  <span className='details-hero__genres'>
                    <span>{dayjs(movie.release_date).format('YYYY')}</span>
                    <TbMinusVertical />
                    <span className='details-hero__runtime'>
                      {minToHours(movie.runtime)}
                    </span>
                    <TbMinusVertical />

                    {movie.genres.map((genre) => (
                      <Link
                        to={`/movies/${genre.name}`}
                        className='details-hero__genre'
                        key={genre.id}
                      >
                        {genre.name}
                      </Link>
                    ))}
                  </span>
                  <p className='details-hero__overview'>{movie.overview}</p>
                  <span className='details-hero__cast'>
                    <span className='details-hero__cast-title'>
                      Protagonistas:{' '}
                    </span>
                    <span className='details-hero__cast-actors'>
                      {movie.credits.cast
                        .slice(0, 3)
                        .map((casx) => casx.name)
                        .join(', ')}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {isSmallScreen ? (
        <div className='ml-padding'>
          {' '}
          <div className='details-hero__right'>
            <div className='details-hero__info'>
              {logoRandom ? (
                <div
                  className={`details-hero__logo-container ${imageSize(
                    logoRandom.height
                  )}`}
                >
                  <img
                    className='details-hero__logo'
                    src={`https://image.tmdb.org/t/p/original/${logoRandom.file_path}`}
                    alt={movie.title}
                  />
                </div>
              ) : null}
              <div className='details-hero__details-info'>
                <h1
                  className={`details-hero__title ${
                    logoRandom ? '' : 'details-hero__title--font'
                  }`}
                >
                  {movie.title}
                </h1>
                <span className='details-hero__genres'>
                  <span>{dayjs(movie.release_date).format('YYYY')}</span>
                  <TbMinusVertical />
                  <span className='details-hero__runtime'>
                    {minToHours(movie.runtime)}
                  </span>
                  <TbMinusVertical />

                  {movie.genres.map((genre) => (
                    <Link
                      to={`/movies/${genre.name}`}
                      className='details-hero__genre'
                      key={genre.id}
                    >
                      {genre.name}
                    </Link>
                  ))}
                </span>
                <p className='details-hero__overview'>{movie.overview}</p>
                <span className='details-hero__cast'>
                  <span className='details-hero__cast-title'>
                    Protagonistas:{' '}
                  </span>
                  <span className='details-hero__cast-actors'>
                    {movie.credits.cast
                      .slice(0, 3)
                      .map((casx) => casx.name)
                      .join(', ')}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailsHero;
