import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PlayNowPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePlayNowClick = () => {
    setIsVisible(true);

    // Automatically hide the popup after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <>
      <button onClick={handlePlayNowClick} className="bg-white text-black px-4 py-2 rounded-lg font-medium">
        Play Now
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className=" absolute  
           bg-black border border-[#b7722d] rounded-lg 
           px-6 py-4 z-50"
          >
            <p className="text-white text-center">Not live yet , Come back later 😃!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlayNowPopup;
