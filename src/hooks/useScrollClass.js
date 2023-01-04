import { useEffect, useState } from 'react';

function useScrollClass(className) {
  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    let previousScroll = 0;

    function handleScroll() {
      const currentScroll = window.scrollY;

      if (currentScroll > previousScroll) {
        setScrollClass(className);
      } else {
        setScrollClass('');
      }

      previousScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [className]);

  return scrollClass;
}

export default useScrollClass;
