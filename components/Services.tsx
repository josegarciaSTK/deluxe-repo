
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(SERVICES[0].id);

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
      </div>
    </section>
  );
};

export default Services;
