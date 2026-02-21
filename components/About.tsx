
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const About: React.FC = () => {
  // A larger set of images for the horizontal scroll
  const galleryImages = [
    'https://images.unsplash.com/photo-1556912177-c54030639a60?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="lg:w-1/3">
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
              About us
            </span>
            <h2 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 leading-tight">
              Elite Multifaceted Builders
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl md:text-2xl font-manrope text-zinc-600 leading-relaxed">
              Welcome to <span className="font-bold text-zinc-900">DELUXE</span>, your multifaceted construction experts, dedicated to transforming properties with precision and care. With 15 years of experience in building luxury multi-family communities, commercial retail, and custom homes, we take pride in delivering top-quality craftsmanship and a seamless customer experience.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Gallery - No rounded corners, smaller, seamless */}
      <div className="relative mb-24 w-full">
        <div className="flex">
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* First Set */}
            <div className="flex gap-4 pr-4">
              {galleryImages.map((src, idx) => (
                <div 
                  key={`set1-${idx}`} 
                  className="w-[180px] md:w-[240px] aspect-[4/3] flex-shrink-0 overflow-hidden"
                >
                  <img 
                    src={src} 
                    alt={`Renovation detail ${idx}`} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-none" 
                  />
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex gap-4 pr-4">
              {galleryImages.map((src, idx) => (
                <div 
                  key={`set2-${idx}`} 
                  className="w-[180px] md:w-[240px] aspect-[4/3] flex-shrink-0 overflow-hidden"
                >
                  <img 
                    src={src} 
                    alt={`Renovation detail duplicate ${idx}`} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-none" 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="text-6xl md:text-7xl font-manrope font-light text-zinc-900 mb-4">{stat.value}</span>
              <h4 className="text-xl font-manrope font-semibold text-zinc-900 mb-2">{stat.label}</h4>
              <p className="text-zinc-500 font-manrope">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
