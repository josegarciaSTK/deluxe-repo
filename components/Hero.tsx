
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] bg-[#152218] overflow-hidden pt-32 pb-20 md:pt-48 flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-manrope mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for elite projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-manrope font-medium text-white leading-[1.05] mb-8 tracking-tight"
          >
            Elite <span className="text-zinc-500 italic">Craftsmanship</span> Since 2009.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-manrope text-zinc-400 mb-10 max-w-lg leading-relaxed"
          >
            Deluxe Renovations transforms properties across Florida into high-end architectural masterpieces with 15 years of precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/contact" className="group inline-flex items-center gap-6 px-8 py-3 bg-white text-zinc-900 rounded-full font-manrope font-bold hover:bg-zinc-200 transition-all">
              Start Your Vision
              <span className="flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="text-white" size={20} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Feature Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full md:w-[600px] h-[500px] overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670"
            alt="Luxury Renovation"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-6 right-6 p-8 bg-zinc-900/90 backdrop-blur-md border border-white/10 max-w-xs text-white"
          >
            <div className="flex gap-1 mb-3 text-zinc-400 text-xs font-bold uppercase tracking-widest">
              Verified Excellence
            </div>
            <p className="text-sm font-manrope leading-relaxed opacity-80">
              "Every detail was handled with precision. DLX turned our vision into an elite living experience."
            </p>
            <div className="mt-4 font-manrope text-xs font-bold uppercase tracking-tighter">
              — Premium Client, Orlando
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
