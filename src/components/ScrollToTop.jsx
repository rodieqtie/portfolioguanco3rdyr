import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button 
      className={`scroll-to-top ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
      initial={{ scale: 0 }}
      animate={{ scale: showButton ? 1 : 0 }}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;

