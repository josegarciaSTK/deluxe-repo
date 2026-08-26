
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Images, MapPin, ArrowLeft, Clock, User, ZoomIn, X, ChevronRight as Arrow } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

// ─── Lightbox Component ───────────────────────────────────────────────────────

const Lightbox: React.FC<{
  images: string[];
  startIndex: number;
  onClose: () => void;
}> = ({ images, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);
  const next = useCallback(() => setIdx(i => Math.min(i + 1, images.length - 1)), [images.length]);
  const prev = useCallback(() => setIdx(i => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [next, prev, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]">
        <X size={28} />
      </button>
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-manrope font-bold tracking-widest uppercase tabular-nums">
        {idx + 1} / {images.length}
      </div>
      <div className="w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            src={images[idx]}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
          />
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={prev} disabled={idx === 0} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 disabled:opacity-0 transition-opacity">
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button onClick={next} disabled={idx === images.length - 1} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 disabled:opacity-0 transition-opacity">
            <ChevronRight size={24} className="text-white" />
          </button>
        </>
      )}
    </motion.div>
  );
};

// ─── Data & Config ────────────────────────────────────────────────────────────

const SERVICE_ORDER = ['Kitchen', 'Bathroom', 'Staircase', 'Mudroom', 'Flooring', 'Other'];
const SERVICE_COVER: Record<string, string> = {
  Kitchen:    '/images/vlp-kitchen/kitchen-1.jpg',
  Bathroom:   '/images/vlp-bathroom/bath-1.jpg',
  Staircase:  '/images/vlp-staircase/stairs-1.jpg',
  Mudroom:    '/images/vlp-mudcloset/mudcloset-1.jpg',
  Flooring:   '/images/flooring-winter-garden/1.jpg',
  Other:      '/images/vlp-after/after-exterior.jpg',
};

const SERVICES = SERVICE_ORDER.filter(s => PROJECTS.some(p => p.category === s));

type PageState =
  | { level: 1 }
  | { level: 2; service: string }
  | { level: 3; service: string; project: Project };

// ─── Level 3: Project Detail ──────────────────────────────────────────────────

const Level3: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  const [mode, setMode] = useState<'gallery' | 'comparison'>(project.beforeImages.length > 0 ? 'comparison' : 'gallery');
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const totalPhotos = mode === 'gallery' ? project.afterImages.length : Math.max(project.beforeImages.length, project.afterImages.length);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-white">
      <div className="pt-24 md:pt-32 px-5 sm:px-6 max-w-6xl mx-auto pb-20">
        {/* Back Button */}
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-10 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={14} /> Back to Projects
        </button>

        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">
              {project.category} · {project.location ?? 'Florida'}
            </span>
            <h1 className="text-4xl md:text-6xl font-manrope font-medium text-zinc-900 leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-zinc-500 font-manrope text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.beforeImages.length > 0 && (
            <div className="flex bg-zinc-100 p-1 rounded-2xl self-start">
              <button onClick={() => { setMode('comparison'); setIdx(0); }} className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'comparison' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-400'}`}>
                Before & After
              </button>
              <button onClick={() => { setMode('gallery'); setIdx(0); }} className={`px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'gallery' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-400'}`}>
                Gallery
              </button>
            </div>
          )}
        </div>

        {/* Main Display */}
        <div className="space-y-6">
          {mode === 'comparison' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <span className="text-center block text-[10px] font-bold uppercase tracking-widest text-zinc-300">Before</span>
                <div onClick={() => setLightbox(idx)} className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-100 cursor-zoom-in relative group">
                  {project.beforeImages[idx] ? (
                    <img src={project.beforeImages[idx]} className="w-full h-full object-cover" alt="Before" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-300 text-xs uppercase tracking-widest font-bold">Photo Pending</div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-center block text-[10px] font-bold uppercase tracking-widest text-zinc-500">After</span>
                <div onClick={() => setLightbox(idx)} className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-zinc-100 cursor-zoom-in relative group shadow-xl">
                  {project.afterImages[idx] && (
                    <img src={project.afterImages[idx]} className="w-full h-full object-cover" alt="After" />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden bg-zinc-100 shadow-2xl relative group cursor-zoom-in" onClick={() => setLightbox(idx)}>
              <img src={project.afterImages[idx]} className="w-full h-full object-cover" alt="Gallery" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          )}

          {/* Controls */}
          {totalPhotos > 1 && (
            <div className="flex items-center justify-between pt-4">
              <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
                {(mode === 'gallery' ? project.afterImages : project.afterImages).map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} className={`w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all border-2 ${idx === i ? 'border-zinc-900 opacity-100' : 'border-transparent opacity-40'}`}>
                    <img src={mode === 'gallery' ? project.afterImages[i] : (project.afterImages[i] || project.beforeImages[i])} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 pl-6">
                <button disabled={idx === 0} onClick={() => setIdx(i => i - 1)} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center active:bg-zinc-100 disabled:opacity-30">
                  <ChevronLeft size={20} />
                </button>
                <button disabled={idx === totalPhotos - 1} onClick={() => setIdx(i => i + 1)} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center active:bg-zinc-100 disabled:opacity-30">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="mt-20 pt-20 border-t border-zinc-100 text-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 mb-8">Client Feedback</h4>
            <p className="text-2xl md:text-3xl font-manrope text-zinc-900 leading-snug italic max-w-3xl mx-auto">
              "{project.testimonial}"
            </p>
            <p className="mt-6 text-sm font-manrope font-bold uppercase tracking-widest">— {project.client}</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            images={mode === 'gallery' ? project.afterImages : (project.afterImages.length > project.beforeImages.length ? project.afterImages : project.beforeImages)}
            startIndex={lightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Level 2: Project List ────────────────────────────────────────────────────

const Level2: React.FC<{ service: string; onBack: () => void; onSelect: (p: Project) => void }> = ({ service, onBack, onSelect }) => {
  const projects = PROJECTS.filter(p => p.category === service);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="min-h-screen bg-zinc-50">
      <div className="pt-24 md:pt-32 px-5 sm:px-6 max-w-6xl mx-auto pb-20">
        <button onClick={onBack} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-10 hover:text-zinc-900">
          <ArrowLeft size={14} /> Back to Categories
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">Portfolio Selection</span>
            <h1 className="text-[2.5rem] md:text-7xl font-manrope font-medium text-zinc-900 leading-tight">
              {service}
            </h1>
          </div>
          <div className="text-zinc-400 font-manrope font-medium">
            <span className="text-2xl text-zinc-900">{projects.length}</span> {projects.length === 1 ? 'Project' : 'Projects'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onSelect(project)}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={project.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-zinc-900" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{project.client} · {project.location ?? 'FL'}</span>
                </div>
                <h3 className="text-2xl font-manrope font-semibold text-zinc-900 mb-4 group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Project <ChevronRight size={14} />
                  </span>
                  {project.beforeImages.length > 0 && (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">Before & After Available</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Level 1: Categories ──────────────────────────────────────────────────────

const Level1: React.FC<{ onSelect: (s: string) => void }> = ({ onSelect }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-white">
      <div className="pt-24 md:pt-32 px-5 sm:px-6 max-w-6xl mx-auto pb-20">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-zinc-900" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Our Expertise</span>
          </div>
          <h1 className="text-[2.8rem] md:text-8xl font-manrope font-medium text-zinc-900 leading-[1.05] mb-8 tracking-tight">
            Curated <span className="text-zinc-400 italic">Portfolio</span>.
          </h1>
          <p className="text-zinc-500 font-manrope text-base md:text-xl leading-relaxed">
            Choose a category to explore our collection of high-end residential transformations across Central Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onSelect(s)}
              className="group relative h-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <img src={SERVICE_COVER[s]} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-manrope font-medium text-white">{s}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-all">
                    <ChevronRight size={20} />
                  </div>
                </div>
                <p className="text-zinc-300 text-xs font-manrope opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {PROJECTS.filter(p => p.category === s).length} Featured Projects
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const ProjectsPage: React.FC = () => {
  const [page, setPage] = useState<PageState>({ level: 1 });

  return (
    <AnimatePresence mode="wait">
      {page.level === 1 && <Level1 key="l1" onSelect={s => setPage({ level: 2, service: s })} />}
      {page.level === 2 && (
        <Level2
          key="l2"
          service={page.service}
          onBack={() => setPage({ level: 1 })}
          onSelect={p => setPage({ level: 3, service: page.service, project: p })}
        />
      )}
      {page.level === 3 && (
        <Level3
          key="l3"
          project={page.project}
          onBack={() => setPage({ level: 2, service: page.service })}
        />
      )}
    </AnimatePresence>
  );
};

export default ProjectsPage;
