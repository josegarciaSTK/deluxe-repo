
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECT_FOLDERS } from '../constants';
import { ProjectFolder, Project } from '../types';
import { FolderOpen, Folder, ChevronDown, X, ArrowLeft } from 'lucide-react';

// ── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox: React.FC<{ images: string[]; startIndex: number; onClose: () => void }> = ({
  images, startIndex, onClose,
}) => {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        onClick={onClose}
      >
        <X size={20} />
      </button>
      {images.length > 1 && (
        <>
          <button
            className="absolute left-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <button
            className="absolute right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </>
      )}
      <motion.img
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        src={images[current]}
        alt=""
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-6 text-white/50 text-sm">
        {current + 1} / {images.length}
      </div>
    </motion.div>
  );
};

// ── Before/After Photo Grid ───────────────────────────────────────────────────
const PhotoGrid: React.FC<{
  images: string[];
  label: string;
  labelColor: string;
  onOpenLightbox: (idx: number) => void;
}> = ({ images, label, labelColor, onOpenLightbox }) => {
  if (images.length === 0) return null;
  return (
    <div className="mb-10">
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 ${labelColor}`}>
        {label}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group relative bg-zinc-100"
            onClick={() => onOpenLightbox(i)}
          >
            <img
              src={src}
              alt={`${label} ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ── Project Card (inside an open folder) ─────────────────────────────────────
const ProjectCard: React.FC<{ project: Project; categoryFilter: string }> = ({ project, categoryFilter }) => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxStart, setLightboxStart] = useState(0);

  const openLightbox = (images: string[], idx: number) => {
    setLightboxImages(images);
    setLightboxStart(idx);
  };

  if (categoryFilter !== 'All' && project.category !== categoryFilter) return null;

  return (
    <>
      <AnimatePresence>
        {lightboxImages && (
          <Lightbox
            images={lightboxImages}
            startIndex={lightboxStart}
            onClose={() => setLightboxImages(null)}
          />
        )}
      </AnimatePresence>

      <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white">
        {/* Project header – click to expand */}
        <button
          className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
          onClick={() => setExpanded((v) => !v)}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-1 px-2 py-0.5 rounded-full ${
                project.category === 'Kitchen'
                  ? 'bg-amber-100 text-amber-700'
                  : project.category === 'Bathroom'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-zinc-100 text-zinc-600'
              }`}>
                {project.category}
              </span>
              <h3 className="text-lg font-manrope font-semibold text-zinc-900">{project.title}</h3>
              <p className="text-sm text-zinc-400 font-manrope">{project.duration}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center flex-shrink-0"
          >
            <ChevronDown size={18} className="text-zinc-500" />
          </motion.div>
        </button>

        {/* Expanded photo section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-8 border-t border-zinc-100 pt-6 bg-zinc-50/50">
                <p className="text-zinc-600 font-manrope text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* AFTER photos */}
                <PhotoGrid
                  images={project.afterImages}
                  label="After"
                  labelColor="bg-emerald-100 text-emerald-700"
                  onOpenLightbox={(i) => openLightbox(project.afterImages, i)}
                />

                {/* BEFORE photos */}
                <PhotoGrid
                  images={project.beforeImages}
                  label="Before"
                  labelColor="bg-zinc-200 text-zinc-600"
                  onOpenLightbox={(i) => openLightbox(project.beforeImages, i)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

// ── Folder Card ───────────────────────────────────────────────────────────────
const FolderCard: React.FC<{ folder: ProjectFolder; categoryFilter: string; isOpen: boolean; onToggle: () => void }> = ({
  folder, categoryFilter, isOpen, onToggle,
}) => {
  // Count projects visible for this filter
  const visibleCount = categoryFilter === 'All'
    ? folder.projects.length
    : folder.projects.filter((p) => p.category === categoryFilter).length;

  if (visibleCount === 0) return null;

  return (
    <motion.div
      layout
      className="rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-sm"
    >
      {/* Folder header */}
      <button
        className="w-full flex items-center gap-5 p-6 text-left hover:bg-zinc-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* Folder cover thumbnail */}
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-100">
          <img src={folder.coverImage} alt={folder.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <motion.div animate={{ scale: isOpen ? 1.1 : 1 }} transition={{ duration: 0.2 }}>
              {isOpen ? (
                <FolderOpen size={20} className="text-zinc-700 flex-shrink-0" />
              ) : (
                <Folder size={20} className="text-zinc-500 flex-shrink-0" />
              )}
            </motion.div>
            <h2 className="text-xl font-manrope font-semibold text-zinc-900 truncate">
              {folder.name}
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-manrope">
            {visibleCount} project{visibleCount !== 1 ? 's' : ''} · Click to {isOpen ? 'close' : 'view all photos'}
          </p>
        </div>

        {/* Stacked preview thumbnails */}
        <div className="hidden sm:flex items-center -space-x-3 mr-4 flex-shrink-0">
          {folder.projects.slice(0, 3).map((p, i) => (
            <div
              key={p.id}
              className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
              style={{ zIndex: 3 - i }}
            >
              <img src={p.image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          {folder.projects.length > 3 && (
            <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500">
              +{folder.projects.length - 3}
            </div>
          )}
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center flex-shrink-0"
        >
          <ChevronDown size={18} className="text-zinc-500" />
        </motion.div>
      </button>

      {/* Expanded projects inside the folder */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-zinc-100 space-y-4 bg-zinc-50/40">
              {folder.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  categoryFilter={categoryFilter}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const ProjectsPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  const categories = ['All', 'Kitchen', 'Bathroom', 'Other'];

  const toggleFolder = (id: string) => {
    setOpenFolders((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <header className="mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-manrope font-medium text-zinc-900 mb-8 leading-tight">
            Our Featured <br /><span className="text-zinc-400">Masterpieces</span>
          </h1>
          <p className="text-lg text-zinc-500 font-manrope max-w-2xl leading-relaxed">
            Click on a project folder to explore all photos — including before &amp; after transformations for each space.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setCategoryFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-manrope font-bold uppercase tracking-widest transition-all duration-250 ${
                  categoryFilter === cat
                    ? 'bg-zinc-900 text-white shadow-md'
                    : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Folder list */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {PROJECT_FOLDERS.map((folder) => (
              <motion.div
                key={folder.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <FolderCard
                  folder={folder}
                  categoryFilter={categoryFilter}
                  isOpen={openFolders.has(folder.id)}
                  onToggle={() => toggleFolder(folder.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {PROJECT_FOLDERS.every((f) =>
          categoryFilter !== 'All' && f.projects.every((p) => p.category !== categoryFilter)
        ) && (
          <div className="text-center py-24 text-zinc-400">
            <p className="text-xl font-manrope">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
