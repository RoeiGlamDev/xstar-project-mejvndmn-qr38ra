import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', distance: number) => ({
  hidden: { 
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up' ? -distance : direction === 'down' ? distance : 0,
    opacity: 0 
  },
  visible: { 
    x: 0, 
    y: 0, 
    opacity: 1 
  },
});

export const useOnScreen = (ref: React.RefObject<HTMLElement>, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
};

const AnimationUtils = {
  fadeIn,
  slideIn,
  useOnScreen,
};

export default AnimationUtils;