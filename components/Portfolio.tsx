
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Eye, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import Lightbox from './Lightbox';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
              Our work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope font-medium text-zinc-900 mb-6">
              26 Village Las Palmas
            </h2>
            <p className="text-base md:text-xl text-zinc-500 font-manrope max-w-3xl mx-auto">
              Full Home Renovation — Explore every detail of this complete residential transformation, from the marble kitchen to custom staircase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {PROJECTS.filter(p => !p.id.includes('mariana')).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg ${
                  idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`${idx === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-white font-manrope font-semibold text-lg md:text-xl mb-1">
                    {project.title.replace('26 Village Las Palmas – ', '')}
                  </h3>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:rotate-0 rotate-45 transition-all">
                    <Eye className="text-white" size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox
            images={selectedProject.galleryImages}
            projectTitle={selectedProject.title}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
