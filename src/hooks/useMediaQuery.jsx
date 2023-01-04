import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
  const [isMatched, setIsMatched] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setIsMatched(mediaQuery.matches);

    const handleMediaQueryChange = () => setIsMatched(mediaQuery.matches);
    mediaQuery.addListener(handleMediaQueryChange);

    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, [query]);

  return isMatched;
};
