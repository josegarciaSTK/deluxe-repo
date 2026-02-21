
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Quote } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
            Our work
          </span>
          <h2 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 mb-6">
            Get inspired by our work
          </h2>
          <p className="text-xl text-zinc-500 font-manrope max-w-2xl mx-auto">
            See how we’ve transformed homes with our expert craftsmanship and attention to detail.
          </p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-manrope font-semibold text-zinc-900">{project.title}</h3>
                  <div className="flex gap-4">
                    <span className="px-4 py-1 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium">{project.category}</span>
                    <span className="px-4 py-1 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium">{project.duration}</span>
                  </div>
                  <p className="text-lg text-zinc-600 font-manrope leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="p-8 bg-zinc-50 rounded-2xl relative border border-zinc-100 shadow-sm">
                  <Quote className="text-zinc-300 absolute top-4 left-4" size={40} />
                  <p className="relative z-10 text-lg font-manrope italic text-zinc-600 mb-6 pl-6">
                    "{project.testimonial}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-zinc-200 pt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={project.clientImage} alt={project.client} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-manrope font-semibold text-zinc-900">{project.client}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
