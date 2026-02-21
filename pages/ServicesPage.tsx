
import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-8">
            Expertise
          </span>
          <h1 className="text-5xl md:text-8xl font-manrope font-medium text-zinc-900 mb-8 leading-[0.9] tracking-tighter">
            Tailored solutions <br />for your space
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-manrope">
            We provide a comprehensive range of construction and renovation services, combining years of expertise with a passion for high-quality design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group bg-zinc-50 border border-zinc-100 hover:bg-[#152218] transition-all duration-700 p-1"
            >
              <Link to={`/services/${service.id}`} className="block h-full p-10">
                <div className="w-16 h-16 bg-white flex items-center justify-center mb-10 shadow-sm group-hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 bg-zinc-900 group-hover:bg-white"></div>
                </div>
                <h3 className="text-3xl font-manrope font-semibold text-zinc-900 mb-6 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-zinc-500 group-hover:text-zinc-400 transition-colors mb-8 leading-relaxed font-manrope">
                  {service.description}
                </p>
                <div className="h-[400px] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-900 group-hover:text-white transition-colors">
                  Explore Service
                  <span className="w-12 h-[1px] bg-current group-hover:w-16 transition-all"></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
