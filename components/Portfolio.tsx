
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Eye } from 'lucide-react';
import { Project } from '../types';
import Lightbox from './Lightbox';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
              Our work
            </span>
            <h2 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 mb-6">
              26 Village Las Palmas
            </h2>
            <p className="text-xl text-zinc-500 font-manrope max-w-3xl mx-auto">
              Full Home Renovation — Explore every detail of this complete residential transformation, from the marble kitchen to custom staircase to a stunning new exterior.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter(p => !p.id.includes('mariana')).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`${idx === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {project.duration}
                      </span>
                    </div>
                    <h3 className="text-white font-manrope font-semibold text-lg md:text-xl leading-tight mb-2">
                      {project.title.replace('26 Village Las Palmas – ', '')}
                    </h3>
                    <p className="text-white/70 font-manrope text-sm line-clamp-2 hidden md:block">
                      {project.description}
                    </p>
                  </div>

                  {/* View icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 rotate-45">
                    <Eye className="text-white" size={18} />
                  </div>
                </div>

                {/* Always-visible label (mobile) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent md:hidden">
                  <h3 className="text-white font-manrope font-semibold text-base">
                    {project.title.replace('26 Village Las Palmas – ', '')}
                  </h3>
                  <span className="text-white/70 text-xs font-manrope">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
