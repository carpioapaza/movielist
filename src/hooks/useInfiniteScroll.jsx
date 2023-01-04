import { useEffect, useRef } from 'react';

const useInfiniteScroll = (callback) => {
  const observer = useRef();
  const lastItem = useRef(null);
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && callback) {
        callback();
      }
    });
    if (lastItem.current) observer.current.observe(lastItem.current);
  }, [callback]);
  function setLastItemRef(node) {
    lastItem.current = node;
  }
  return [setLastItemRef];
};

export default useInfiniteScroll;
