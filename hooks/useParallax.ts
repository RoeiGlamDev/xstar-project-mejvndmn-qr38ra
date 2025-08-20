import { useEffect, useState } from 'react';

const useParallax = (ref: React.RefObject<HTMLDivElement>, speed: number) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      setOffset(top * speed);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offset;
};

export default useParallax;