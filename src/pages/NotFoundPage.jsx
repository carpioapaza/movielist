import React from 'react';
import NotFoundSvg from '../components/NotFoundSvg';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <div className='not-found__hero ml-padding'>
        <NotFoundSvg />
      </div>
    </div>
  );
};

export default NotFoundPage;
