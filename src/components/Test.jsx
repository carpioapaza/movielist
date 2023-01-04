import { useQuery } from '@tanstack/react-query';
import { getDetails, getPopularMovies } from '../api/moviesAPI';
import { useEffect, useState } from 'react';
const Test = () => {
  // const [movies, setMovies] = useState('');
  // useEffect(() => {
  //   (async () => {
  //     const data = await getPopularMovies();
  //     setMovies(data);
  //   })();
  // }, []);
  // console.log(movies);
  // useEffect(() => {
  //   (async () => {
  //     const data = await getDetails(19995);
  //     console.log(data);
  //     // setMovies(data);
  //   })();
  // }, []);

  // return <div className='Hola'>{JSON.stringify(data)}</div>;
  return (
    <main className='main'>
      <div className='popular'>gaeagagsagaa</div>
    </main>
  );
};

export default Test;
