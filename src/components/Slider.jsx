import React, { useState } from 'react';

const Slider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerWidth = 250;
  const totalWidth = React.Children.count(children) * 200;

  const handlePreviousClick = () => {
    if (scrollPosition < 0) {
      setScrollPosition(scrollPosition + 100);
    }
  };

  const handleNextClick = () => {
    if (scrollPosition > -(totalWidth - containerWidth)) {
      setScrollPosition(scrollPosition - 100);
    }
  };

  return (
    <div className='slider'>
      <div
        className='cards'
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {children}
      </div>
      <button className='previous' onClick={handlePreviousClick}>
        Previous
      </button>
      <button className='next' onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Slider;
