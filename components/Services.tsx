
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(SERVICES[0].id);
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 mb-6">
            What we do
          </h2>
          <p className="text-lg text-zinc-600 font-manrope">
            Find out which one of our services fit the needs of your project
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Service Image Display */}
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
                  alt="Service Illustration"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full lg:w-1/2 space-y-4">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className={`border-b border-zinc-200 transition-all cursor-pointer overflow-hidden ${openId === service.id ? 'bg-white shadow-lg p-6' : 'hover:bg-zinc-100 p-6'}`}
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-manrope font-medium text-zinc-900">
                    {service.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openId === service.id ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600'}`}>
                    {openId === service.id ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                <AnimatePresence>
                  {openId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-lg text-zinc-600 font-manrope leading-relaxed">
                        {service.description}
                      </p>
                      <Link 
                        to={`/services/${service.id}`}
                        className="mt-6 inline-block px-6 py-2 border-2 border-zinc-900 text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-colors"
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

        {/* Expandable Services Grid */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-manrope font-bold text-sm hover:bg-zinc-800 transition-all"
          >
            {showAllServices ? 'Hide Services' : 'View All Services'}
            <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/10 transition-transform duration-300 ${showAllServices ? 'rotate-180' : ''}`}>
              <ChevronDown className="text-white" size={18} />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {showAllServices && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {SERVICES.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-manrope font-semibold text-lg text-zinc-900 mb-2 group-hover:text-zinc-700 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-sm text-zinc-500 font-manrope leading-relaxed line-clamp-2 mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-zinc-900 font-manrope font-semibold text-sm group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
