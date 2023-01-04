import React, { useEffect, useState } from 'react';
import { searchMovies } from '../api/moviesAPI';

import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { BsSearch, BsArrowRight } from 'react-icons/bs';
import Loader from './Loader';

const Searcher = () => {
  const [searcherModal, setSearcherModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const res = await searchMovies(searchInput);
      setResults(res);
      setIsLoading(false);
    };
    if (searchInput === '') {
      setResults([]);
      setIsLoading(false);
    } else {
      fetch();
    }
  }, [searchInput]);

  return (
    <div className='searcher'>
      {!searcherModal && (
        <button
          className='searcher__launcher'
          onClick={() => {
            setSearcherModal(!searcherModal);
          }}
        >
          <BsSearch />
        </button>
      )}
      {searcherModal && (
        <div
          className={`searcher__modal ${
            results.length === 0 ? '' : 'searcher__modal--searching'
          } `}
        >
          <div className='searcher__header'>
            <span className='searcher__title'>Buscar pelicula</span>
            <button
              className='searcher__close'
              onClick={() => {
                setSearcherModal(false);
                setSearchInput('');
              }}
            >
              <CgClose />
            </button>
          </div>
          <div className='searcher__form'>
            <input
              className='searcher__input'
              type='search'
              autoFocus='true'
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </div>

          <div
            className={`searcher__results ${
              results.length >= 1 ? 'searcher__results--on' : ''
            }`}
          >
            {results.slice(0, 15).map((result) => (
              <>
                {isLoading ? (
                  <Loader color='white' />
                ) : (
                  <Link
                    className='searcher__result'
                    key={result.id}
                    to={`/movie/${result.id}`}
                    onClick={() => {
                      setTimeout(() => {
                        setResults([]);

                        setSearcherModal(false);
                      }, 200);
                    }}
                  >
                    <img
                      className='searcher__result-image'
                      src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                    />
                    <div className='searcher__result-info'>
                      <span className='searcher__result-title'>
                        {result.title}
                      </span>
                      <span className='searcher__result-release-date'>
                        {result.release_date}
                      </span>
                    </div>
                    <span className='searcher__result-arrow'>
                      <BsArrowRight />
                    </span>
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searcher;
