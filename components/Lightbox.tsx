
import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  projectTitle: string;
  initialIndex?: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, projectTitle, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, images.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goNext, goPrev]);

  // Lock body scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalOverflow; };
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 md:right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20"
        >
          <X className="text-white" size={20} />
        </button>

        {/* Project title */}
        <div className="absolute -top-12 left-4 md:left-0 z-20">
          <span className="text-white/70 font-manrope text-sm font-medium">{projectTitle}</span>
        </div>

        {/* Image container */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-900">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              src={images[currentIndex]}
              alt={`${projectTitle} - Photo ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Navigation arrows */}
          {currentIndex > 0 && (
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all group z-20"
            >
              <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
            </button>
          )}
          {currentIndex < images.length - 1 && (
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all group z-20"
            >
              <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm z-20">
            <span className="text-white/90 font-manrope text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 justify-center overflow-x-auto py-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                idx === currentIndex
                  ? 'ring-2 ring-white opacity-100 scale-105'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Lightbox;
