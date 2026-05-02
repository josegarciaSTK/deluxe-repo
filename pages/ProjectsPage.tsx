import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronRight as Arrow, Images, MapPin, ArrowLeft, Clock, User, ZoomIn, X } from 'lucide-react';

// ─── Lightbox ─────────────────────────────────────────────────────────────────

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
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
      >
        <X size={22} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs font-manrope tabular-nums">
        {idx + 1} / {images.length}
      </div>

      {/* Image */}
      <div
        className="w-full h-full flex items-center justify-center px-16 py-16"
        onClick={e => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            src={images[idx]}
            alt={`Photo ${idx + 1}`}
            className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 8rem)' }}
          />
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      {idx > 0 && (
        <button
          onClick={e => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft size={22} />
        </button>
      )}
      {idx < images.length - 1 && (
        <button
          onClick={e => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setIdx(i); }}
              className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden transition-all ${i === idx ? 'ring-2 ring-white opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};
import { PROJECTS } from '../constants';
import { Project } from '../types';

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICE_ORDER = ['Kitchen', 'Bathroom', 'Staircase', 'Mudroom', 'Flooring', 'Other'];

const SERVICE_COVER: Record<string, string> = {
  Kitchen:    '/images/vlp-kitchen/kitchen-1.jpg',
  Bathroom:   '/images/vlp-bathroom/bath-1.jpg',
  Staircase:  '/images/vlp-staircase/stairs-1.jpg',
  Mudroom:    '/images/vlp-mudcloset/mudcloset-1.jpg',
  Flooring:   '/images/flooring-winter-garden/1.jpg',
  Other:      '/images/vlp-after/after-exterior.jpg',
};

const SERVICE_DESC: Record<string, string> = {
  Kitchen:    'Custom cabinetry, premium countertops, backsplash tile, and full kitchen transformations designed for modern living.',
  Bathroom:   'Spa-level finishes, large-format tile, frameless glass, and complete bathroom renovations built to last.',
  Staircase:  'Custom wood treads, patterned tile risers, and designer metal railings — the architectural focal point of any home.',
  Mudroom:    'Built-in storage systems, wood bench seating, and functional entryway solutions crafted for everyday elegance.',
  Flooring:   'LVP, ceramic tile, hardwood, and specialty flooring installations with precision craftsmanship throughout.',
  Other:      'Full home remodels, exterior transformations, barn doors, and specialty renovation projects.',
};

const SERVICES = SERVICE_ORDER.filter(s => PROJECTS.some(p => p.category === s));

// ─── State machine ────────────────────────────────────────────────────────────

type Page =
  | { level: 1 }
  | { level: 2; service: string }
  | { level: 3; service: string; project: Project };

// ─── Page 3 — Project Detail ──────────────────────────────────────────────────

const Page3: React.FC<{ project: Project; onBack: () => void }> = ({ project, onBack }) => {
  const hasBeforeImages = project.beforeImages.length > 0;
  const [mode, setMode] = useState<'gallery' | 'comparison'>(
    hasBeforeImages ? 'comparison' : 'gallery'
  );
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const compLen = Math.max(project.beforeImages.length, project.afterImages.length);
  const maxIdx = mode === 'gallery' ? project.afterImages.length - 1 : compLen - 1;

  const next = useCallback(() => {
    if (idx < maxIdx) { setDir(1); setIdx(i => i + 1); }
  }, [idx, maxIdx]);

  const prev = useCallback(() => {
    if (idx > 0) { setDir(-1); setIdx(i => i - 1); }
  }, [idx]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [next, prev]);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const switchMode = (m: 'gallery' | 'comparison') => { setMode(m); setIdx(0); setDir(0); };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="bg-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-[11px] font-manrope font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest mb-10"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
          Back
        </button>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#152218]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 leading-tight mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
              <div className="flex items-center gap-1.5 text-sm font-manrope text-zinc-500">
                <User size={13} className="text-zinc-400" />
                {project.client}
              </div>
              <div className="flex items-center gap-1.5 text-sm font-manrope text-zinc-500">
                <MapPin size={13} className="text-zinc-400" />
                {project.location ?? 'Florida'}
              </div>
              {project.duration && (
                <div className="flex items-center gap-1.5 text-sm font-manrope text-zinc-500">
                  <Clock size={13} className="text-zinc-400" />
                  {project.duration}
                </div>
              )}
            </div>
            {project.description && (
              <p className="text-zinc-500 font-manrope text-base leading-relaxed max-w-2xl">
                {project.description}
              </p>
            )}
          </div>

          {hasBeforeImages && (
            <div className="hidden md:flex flex-shrink-0 border border-zinc-200 rounded-lg overflow-hidden self-start">
              <button
                onClick={() => switchMode('comparison')}
                className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                  mode === 'comparison' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50'
                }`}
              >Before & After</button>
              <button
                onClick={() => switchMode('gallery')}
                className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all border-l border-zinc-200 ${
                  mode === 'gallery' ? 'bg-zinc-900 text-white border-zinc-900' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-50'
                }`}
              >Gallery</button>
            </div>
          )}
        </div>

        {hasBeforeImages && (
          <div className="md:hidden mt-5 flex border border-zinc-200 rounded-lg overflow-hidden">
            <button onClick={() => switchMode('comparison')} className={`flex-1 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all ${mode === 'comparison' ? 'bg-zinc-900 text-white' : 'text-zinc-500'}`}>
              Before & After
            </button>
            <button onClick={() => switchMode('gallery')} className={`flex-1 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all border-l border-zinc-200 ${mode === 'gallery' ? 'bg-zinc-900 text-white' : 'text-zinc-500'}`}>
              Gallery
            </button>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {mode === 'comparison' ? (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <span className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Before</span>
              <div
                className="relative overflow-hidden rounded-xl bg-zinc-100 cursor-zoom-in group"
                style={{ aspectRatio: '4/3' }}
                onClick={() => project.beforeImages[idx] && setLightbox({ images: project.beforeImages, index: idx })}
              >
                {project.beforeImages[idx]
                  ? <>
                      <img src={project.beforeImages[idx]} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                      </div>
                    </>
                  : <div className="absolute inset-0 flex items-center justify-center"><span className="text-zinc-300 text-xs uppercase tracking-widest font-manrope">No photo</span></div>}
              </div>
            </div>
            <div className="flex sm:flex-col flex-row items-center justify-center gap-3 sm:py-6 px-2 sm:px-0 flex-shrink-0">
              <button onClick={prev} disabled={idx === 0} className="w-9 h-9 rounded-full border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronLeft size={16} className="text-zinc-600" />
              </button>
              <span className="text-zinc-400 text-xs font-manrope tabular-nums">{idx + 1}/{compLen}</span>
              <button onClick={next} disabled={idx === maxIdx} className="w-9 h-9 rounded-full border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronRight size={16} className="text-zinc-600" />
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <span className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">After</span>
              <div
                className="relative overflow-hidden rounded-xl bg-zinc-100 cursor-zoom-in group"
                style={{ aspectRatio: '4/3' }}
                onClick={() => project.afterImages[idx] && setLightbox({ images: project.afterImages, index: idx })}
              >
                {project.afterImages[idx]
                  ? <>
                      <img src={project.afterImages[idx]} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                      </div>
                    </>
                  : <div className="absolute inset-0 flex items-center justify-center"><span className="text-zinc-300 text-xs uppercase tracking-widest font-manrope">No photo</span></div>}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div
              className="relative overflow-hidden rounded-xl bg-zinc-100 cursor-zoom-in group"
              style={{ aspectRatio: '16/9' }}
              onClick={() => setLightbox({ images: project.afterImages, index: idx })}
            >
              <AnimatePresence custom={dir} mode="wait">
                <motion.img
                  key={idx}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  src={project.afterImages[idx]}
                  alt={`Photo ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {idx > 0 && (
                <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all">
                  <ChevronLeft size={20} className="text-zinc-700" />
                </button>
              )}
              {idx < project.afterImages.length - 1 && (
                <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all">
                  <ChevronRight size={20} className="text-zinc-700" />
                </button>
              )}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-black/50 backdrop-blur-sm">
                <Images size={10} className="text-white/70" />
                <span className="text-white text-[11px] font-manrope tabular-nums">{idx + 1} / {project.afterImages.length}</span>
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={11} className="text-white/80" />
                <span className="text-white/80 text-[10px] font-manrope uppercase tracking-widest">Tap to zoom</span>
              </div>
            </div>
            {project.afterImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.afterImages.map((img, i) => (
                  <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${i === idx ? 'ring-2 ring-zinc-900 ring-offset-2 opacity-100' : 'opacity-40 hover:opacity-70'}`}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <Lightbox
              images={lightbox.images}
              startIndex={lightbox.index}
              onClose={() => setLightbox(null)}
            />
          )}
        </AnimatePresence>

        {project.testimonial && (
          <div className="mt-14 border-t border-zinc-100 pt-12">
            <div className="w-8 h-px bg-[#152218] mb-6" />
            <blockquote className="text-zinc-600 font-manrope text-xl italic leading-relaxed max-w-2xl">
              "{project.testimonial}"
            </blockquote>
            <p className="mt-5 text-sm font-manrope font-bold text-zinc-900 uppercase tracking-widest">— {project.client}</p>
          </div>
        )}

        <div className="mt-14 pt-8 border-t border-zinc-100">
          <button onClick={onBack} className="inline-flex items-center gap-2 px-7 py-3.5 bg-zinc-900 text-white text-[11px] font-bold font-manrope uppercase tracking-widest hover:bg-zinc-700 transition-colors">
            <ArrowLeft size={13} />
            Back
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Page 2 — Projects by Service ────────────────────────────────────────────

const Page2: React.FC<{
  service: string;
  onBack: () => void;
  onSelect: (p: Project) => void;
}> = ({ service, onBack, onSelect }) => {
  const projects = PROJECTS.filter(p => p.category === service);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="bg-stone-50 min-h-screen"
    >
      {/* Header */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-10">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-[11px] font-manrope font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest mb-8"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Projects
          </button>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px bg-[#152218]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Service Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 leading-tight">
                {service}
              </h1>
            </div>
            <div className="text-right">
              <p className="text-3xl font-manrope font-medium text-zinc-900">{projects.length}</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-0.5">
                {projects.length === 1 ? 'Project' : 'Projects'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const totalPhotos = project.afterImages.length + project.beforeImages.length;
            const hasBefore = project.beforeImages.length > 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="group bg-white border border-zinc-200 overflow-hidden cursor-pointer hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500"
                onClick={() => onSelect(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-zinc-100" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Before & After badge */}
                  {hasBefore && (
                    <div className="absolute bottom-0 left-0 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                      Before & After
                    </div>
                  )}

                  {/* Photo count */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold">
                    <Images size={9} />{totalPhotos} photos
                  </div>
                </div>

                {/* Info panel */}
                <div className="p-7">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-5 h-px bg-[#152218]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {project.category}
                      {project.duration ? ` · ${project.duration}` : ''}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-manrope font-semibold text-zinc-900 leading-snug mb-4">
                    {project.title}
                  </h3>

                  {/* Client / Location */}
                  <div className="grid grid-cols-2 gap-4 pb-5 mb-5 border-b border-zinc-100">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Client</p>
                      <p className="text-sm font-manrope text-zinc-700 leading-snug">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Location</p>
                      <p className="text-sm font-manrope text-zinc-700 leading-snug flex items-center gap-1">
                        <MapPin size={11} className="text-zinc-400 flex-shrink-0" />
                        {project.location ?? 'Florida'}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 font-manrope leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  {/* CTA footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-zinc-100">
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-900 group-hover:gap-3 transition-all duration-300">
                      View Project
                      <ChevronRight size={13} />
                    </span>
                    {hasBefore && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Before & After Available
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="h-16" />
    </motion.div>
  );
};

// ─── Page 1 — Service Categories ─────────────────────────────────────────────

const Page1: React.FC<{ onSelect: (service: string) => void }> = ({ onSelect }) => {
  const totalPhotos = PROJECTS.reduce((n, p) => n + p.afterImages.length + p.beforeImages.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-stone-50 min-h-screen"
    >
      {/* Hero — light editorial header */}
      <div className="bg-white pt-20 pb-14 px-6 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#152218]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
              Deluxe Renovations · Portfolio
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-manrope font-medium text-zinc-900 leading-tight mb-5">
                Our Featured<br />
                <span className="text-zinc-400">Projects</span>
              </h1>
              <p className="text-zinc-500 font-manrope text-lg max-w-xl leading-relaxed">
                Select a service category to explore our full portfolio of residential renovations across Central Florida.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-10 flex-shrink-0">
              <div>
                <p className="text-4xl font-manrope font-medium text-zinc-900">{PROJECTS.length}</p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Projects</p>
              </div>
              <div className="w-px bg-zinc-200" />
              <div>
                <p className="text-4xl font-manrope font-medium text-zinc-900">{totalPhotos}</p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Photos</p>
              </div>
              <div className="w-px bg-zinc-200" />
              <div>
                <p className="text-4xl font-manrope font-medium text-zinc-900">11+</p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const count = PROJECTS.filter(p => p.category === service).length;
            const cover = SERVICE_COVER[service];
            const desc = SERVICE_DESC[service];

            return (
              <motion.button
                key={service}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                onClick={() => onSelect(service)}
                className="group bg-white border border-zinc-200 overflow-hidden text-left hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all duration-500 focus:outline-none"
              >
                {/* Cover image */}
                <div className="relative overflow-hidden bg-zinc-100" style={{ aspectRatio: '3/2' }}>
                  <img
                    src={cover}
                    alt={service}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Project count badge */}
                  <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    {count} {count === 1 ? 'Project' : 'Projects'}
                  </div>
                </div>

                {/* Info panel */}
                <div className="p-6">
                  {/* Gold accent + service label */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-px bg-[#152218] flex-shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Service</span>
                  </div>

                  {/* Service name */}
                  <h2 className="text-xl font-manrope font-semibold text-zinc-900 mb-3">
                    {service}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 font-manrope leading-relaxed mb-5 line-clamp-2">
                    {desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {count} {count === 1 ? 'Project' : 'Projects'} · Florida
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-900 group-hover:gap-2.5 transition-all duration-300">
                      Explore
                      <Arrow size={12} />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="h-8" />
    </motion.div>
  );
};

// ─── Root ─────────────────────────────────────────────────────────────────────

const ProjectsPage: React.FC = () => {
  const [page, setPage] = useState<Page>({ level: 1 });
  const p2ScrollRef = useRef(0);

  const goToService = (service: string) => {
    setPage({ level: 2, service });
    window.scrollTo({ top: 0 });
  };

  const goToProject = (project: Project) => {
    if (page.level === 2) p2ScrollRef.current = window.scrollY;
    setPage({ level: 3, service: page.level >= 2 ? (page as any).service : project.category, project });
    window.scrollTo({ top: 0 });
  };

  const backToPage1 = () => {
    setPage({ level: 1 });
    window.scrollTo({ top: 0 });
  };

  const backToPage2 = () => {
    const service = page.level === 3 ? (page as any).service : '';
    setPage({ level: 2, service });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      window.scrollTo({ top: p2ScrollRef.current });
    }));
  };

  return (
    <AnimatePresence mode="wait">
      {page.level === 1 && (
        <Page1 key="p1" onSelect={goToService} />
      )}
      {page.level === 2 && (
        <Page2
          key={`p2-${(page as any).service}`}
          service={(page as { level: 2; service: string }).service}
          onBack={backToPage1}
          onSelect={goToProject}
        />
      )}
      {page.level === 3 && (
        <Page3
          key={`p3-${(page as any).project.id}`}
          project={(page as { level: 3; service: string; project: Project }).project}
          onBack={backToPage2}
        />
      )}
    </AnimatePresence>
  );
};

export default ProjectsPage;
