import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowRight, Images } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Take 6 featured projects for the home page
  const featuredProjects = PROJECTS.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 leading-tight"
            >
              Transforming Visions Into<br />
              <span className="text-zinc-400">Architectural Reality</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="group flex items-center gap-3 px-8 py-4 border border-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all"
            >
              View Full Portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/projects`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Hover Meta */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <Images size={12} />
                    {project.afterImages.length + project.beforeImages.length} Photos
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-px bg-zinc-300" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {project.category} · {project.location}
                  </span>
                </div>
                <h3 className="text-xl font-manrope font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
