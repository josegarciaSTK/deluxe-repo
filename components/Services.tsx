
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(SERVICES[0].id);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="bg-zinc-50 overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-medium text-zinc-900 mb-6">
            What we do
          </h2>
          <p className="text-base md:text-lg text-zinc-600 font-manrope">
            Find out which one of our services fit the needs of your project
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Sticky service image — hidden on mobile */}
          <div className="hidden lg:block w-1/2 sticky top-32">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={openId}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  src={SERVICES.find(s => s.id === openId)?.image}
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  alt="Service"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full lg:w-1/2 space-y-4">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className={`border-b border-zinc-200 transition-all cursor-pointer overflow-hidden ${
                  openId === service.id ? 'bg-white shadow-lg p-5 sm:p-6' : 'hover:bg-zinc-100 p-5 sm:p-6'
                }`}
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-manrope font-medium text-zinc-900">
                    {service.name}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ml-4 ${
                    openId === service.id ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600'
                  }`}>
                    {openId === service.id ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                <AnimatePresence>
                  {openId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {/* Image shown inline on mobile/tablet */}
                      <div className="mt-4 lg:hidden aspect-[16/9] overflow-hidden rounded-xl">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-4 md:mt-6 text-base md:text-lg text-zinc-600 font-manrope leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        to={`/services/${service.id}`}
                        className="mt-5 md:mt-6 inline-block px-6 py-2 border-2 border-zinc-900 text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-colors"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable grid */}
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-manrope font-bold text-sm hover:bg-zinc-800 transition-all"
          >
            {showAll ? 'Hide Services' : 'View All Services'}
            <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/10 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              <ChevronDown className="text-white" size={18} />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {SERVICES.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 md:p-6">
                        <h4 className="font-manrope font-semibold text-lg text-zinc-900 mb-2">
                          {service.name}
                        </h4>
                        <p className="text-sm text-zinc-500 font-manrope leading-relaxed line-clamp-2 mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-zinc-900 font-manrope font-semibold text-sm">
                          Learn More
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
