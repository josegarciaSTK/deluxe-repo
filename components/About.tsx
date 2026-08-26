
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const About: React.FC = () => {
  const galleryImages = [
    '/images/vlp-kitchen/kitchen-1.jpg',
    '/images/vlp-kitchen/kitchen-3.jpg',
    '/images/vlp-bathroom/bath-1.jpg',
    '/images/vlp-staircase/stairs-1.jpg',
    '/images/vlp-mudcloset/mudcloset-1.jpg',
    '/images/vlp-after/after-exterior.jpg',
  ];

  return (
    <section id="about" className="bg-white overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="w-full lg:w-1/3">
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
              About us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-medium text-zinc-900 leading-tight">
              Elite Multifaceted Builders
            </h2>
          </div>
          <div className="w-full lg:w-2/3">
            <p className="text-lg sm:text-xl md:text-2xl font-manrope text-zinc-600 leading-relaxed">
              <span className="block mb-4">With over 11 years of experience building luxury multi-family communities, commercial spaces, custom homes, ADUs, and high-end renovations, we deliver results that combine quality, efficiency, and attention to detail.</span>
              <span className="block">At <span className="font-bold text-zinc-900">Deluxe</span>, every project is built to elevate the space and exceed expectations. We specialize in residential and commercial remodeling, flooring, drywall, and custom renovations.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling gallery */}
      <div className="relative overflow-hidden mb-16 md:mb-24">
        <div className="flex">
          <motion.div
            className="flex"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
              {galleryImages.map((src, i) => (
                <div key={`da-${i}`} className="w-[160px] md:w-[240px] aspect-[4/3] flex-shrink-0 overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
              {galleryImages.map((src, i) => (
                <div key={`db-${i}`} className="w-[160px] md:w-[240px] aspect-[4/3] flex-shrink-0 overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center lg:text-left">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-manrope font-light text-zinc-900 mb-3 md:mb-4">{stat.value}</span>
              <h4 className="text-base md:text-xl font-manrope font-semibold text-zinc-900 mb-2">{stat.label}</h4>
              <p className="text-zinc-500 font-manrope text-xs md:text-sm leading-snug">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
