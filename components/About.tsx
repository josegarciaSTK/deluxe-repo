import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '11+', icon: Award },
    { label: 'Projects Completed', value: '200+', icon: Shield },
    { label: 'Happy Clients', value: '100%', icon: Users },
  ];

  const partners = [
    'Premium Quartz', 'Kohler', 'Sherwin Williams', 'Delta Faucet', 'Floor & Decor', 
    'Home Depot Pro', 'Moen', 'Sub-Zero', 'Wolf'
  ];

  return (
    <section id="about" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 block"
            >
              Our Story
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 leading-tight mb-8"
            >
              Elevating Florida Homes Through <span className="text-zinc-400">Masterful Renovation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 font-manrope text-lg leading-relaxed mb-10"
            >
              For over a decade, Deluxe Renovations has been the premier choice for homeowners seeking uncompromising quality and sophisticated design. Based in Saint Cloud, we bring precision craftsmanship to every corner of Central Florida.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-manrope font-semibold text-zinc-900 mb-1">{stat.value}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 transition-all">
                Learn More About Us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Visual Stack */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl z-20"
            >
              <img
                src="/images/vlp-after/after-exterior.jpg"
                alt="Our Workmanship"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-zinc-200 rounded-full blur-3xl opacity-50 z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-zinc-300 rounded-full blur-3xl opacity-50 z-0" />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-30 hidden sm:block"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-zinc-900 mb-1">100%</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Satisfaction</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Logo Ticker */}
        <div className="mt-32 pt-16 border-t border-zinc-200">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-12">
            Trusted by Industry Leaders & Premium Brands
          </p>
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
              {[...partners, ...partners].map((partner, i) => (
                <span
                  key={i}
                  className="text-2xl font-manrope font-bold text-zinc-300 hover:text-zinc-900 transition-colors cursor-default select-none"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
