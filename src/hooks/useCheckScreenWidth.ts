import { useState, useEffect } from 'react';

const useCheckScreenWidth = (breakpoint: number) => {
  const [isMatch, setIsMatch] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMatch(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMatch;
};

export default useCheckScreenWidth;
