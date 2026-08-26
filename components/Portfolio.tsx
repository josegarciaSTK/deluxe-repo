import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

interface RotatingProject {
  title: string;
  loc: string;
  cat: string;
  desc: string;
  imgs: string[];
}

const ROTATING_PROJECTS: RotatingProject[] = [
  {
    title: 'Kitchen Las Palmas',
    loc: 'Saint Augustine, FL',
    cat: 'Kitchen Remodel',
    desc: 'Complete kitchen transformation — marble-look quartz waterfall island, modern two-tone shaker cabinetry, and premium black hardware. Every surface precision-finished.',
    imgs: [
      '/images/vlp-kitchen/kitchen-1.jpg',
      '/images/vlp-kitchen/kitchen-2.jpg',
      '/images/vlp-kitchen/kitchen-3.jpg',
      '/images/vlp-kitchen/kitchen-4.jpg'
    ]
  },
  {
    title: 'Kitchen Joan & Oscar',
    loc: 'Maitland, FL',
    cat: 'Kitchen & Flooring',
    desc: 'Full kitchen and flooring remodel — modern cabinetry, quartz countertops, custom subway tile backsplash, and brand new LVP flooring throughout every room.',
    imgs: [
      '/images/maitland-kitchen/after-1.jpg',
      '/images/maitland-kitchen/after-2.jpg',
      '/images/maitland-kitchen/after-3.jpg',
      '/images/maitland-kitchen/after-4.jpg'
    ]
  },
  {
    title: 'Kitchen Mariana',
    loc: 'Winter Park, FL',
    cat: 'Kitchen Remodel',
    desc: 'Stunning modern kitchen transformation — fresh cabinetry, premium countertops, and thoughtful design details that elevated this Winter Park home to new heights.',
    imgs: [
      '/images/mariana-after/after-1.jpg',
      '/images/mariana-after/after-2.jpg',
      '/images/mariana-after/after-3.jpg',
      '/images/mariana-after/after-4.jpg'
    ]
  },
  {
    title: 'Kitchen Nicolas & Ilene',
    loc: 'St. Cloud, FL',
    cat: 'Kitchen Remodel',
    desc: 'Full kitchen remodel with updated cabinetry, premium countertops, and modern finishes that completely transformed this main living space from floor to ceiling.',
    imgs: [
      '/images/nicolas-kitchen/after-1.jpg',
      '/images/nicolas-kitchen/after-2.jpg',
      '/images/nicolas-kitchen/after-3.jpg',
      '/images/nicolas-kitchen/after-4.jpg'
    ]
  }
];

const Portfolio: React.FC = () => {
  // Initialize to the project matching the current UTC day
  const dailyIndex = Math.floor(Date.now() / 86400000) % ROTATING_PROJECTS.length;
  const [projectIndex, setProjectIndex] = useState(dailyIndex);
  const [slideIndex, setSlideIndex] = useState(0);

  // Lightbox state
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const currentProject = ROTATING_PROJECTS[projectIndex];

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % currentProject.imgs.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [projectIndex, currentProject.imgs.length]);

  const handleProjectSwitch = (newIdx: number) => {
    setProjectIndex(newIdx);
    setSlideIndex(0);
  };

  const handleSlideSwitch = (newIdx: number) => {
    setSlideIndex(newIdx);
  };

  const handleImageClick = () => {
    setLightboxImages(currentProject.imgs);
    setLightboxTitle(currentProject.title);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes dlxKb0 {
          from { transform: scale(1.12) translate(1.5%, 1%); }
          to { transform: scale(1.0) translate(-0.5%, -0.5%); }
        }
        @keyframes dlxKb1 {
          from { transform: scale(1.0) translate(0, 0); }
          to { transform: scale(1.13) translate(-1.5%, 0.5%); }
        }
        @keyframes dlxKb2 {
          from { transform: scale(1.08) translate(-1%, 1%); }
          to { transform: scale(1.18) translate(1%, -1%); }
        }
        @keyframes dlxKb3 {
          from { transform: scale(1.15) translate(-1%, -0.5%); }
          to { transform: scale(1.03) translate(0.5%, 0.5%); }
        }

        #dlx-fp {
          background: #0c0c0c;
          min-height: 600px;
          position: relative;
          overflow: hidden;
          display: flex;
          width: 100%;
          box-sizing: border-box;
        }
        .dlx-fp-photo-panel {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .dlx-fp-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease;
        }
        .dlx-fp-slide.active {
          opacity: 1;
        }
        .dlx-fp-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: transform;
          cursor: zoom-in;
        }
        .dlx-fp-slide.active img {
          animation: dlxKb0 9s ease-in-out both;
        }
        .dlx-fp-slide.active.kb1 img {
          animation-name: dlxKb1;
        }
        .dlx-fp-slide.active.kb2 img {
          animation-name: dlxKb2;
        }
        .dlx-fp-slide.active.kb3 img {
          animation-name: dlxKb3;
        }
        .dlx-fp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.65) 42%, rgba(8,8,8,0.15) 70%, transparent 100%);
          pointer-events: none;
        }
        .dlx-fp-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 48px;
          box-sizing: border-box;
        }
        .dlx-fp-info {
          max-width: 500px;
          width: 100%;
        }
        .dlx-fp-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .dlx-fp-badge {
          font-family: 'Manrope', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .dlx-fp-cat {
          font-family: 'Manrope', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #fff;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 3px 11px;
          border-radius: 100px;
        }
        .dlx-fp-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(22px, 3.8vw, 46px);
          font-weight: 600;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }
        .dlx-fp-loc {
          font-family: 'Manrope', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 12px;
          letter-spacing: .06em;
        }
        .dlx-fp-desc {
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.68);
          line-height: 1.65;
          margin-bottom: 22px;
          max-width: 420px;
        }
        .dlx-fp-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .dlx-fp-cta {
          display: inline-flex;
          align-items: center;
          background: #152218;
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 22px;
          transition: background .2s;
          cursor: pointer;
          border: none;
          white-space: nowrap;
        }
        .dlx-fp-cta:hover {
          background: #1e3320;
        }
        .dlx-fp-bottom {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .dlx-fp-dot {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.2);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background .2s, width .25s;
          padding: 0;
          flex-shrink: 0;
        }
        .dlx-fp-dot.active {
          background: #fff;
          width: 34px;
        }
        .dlx-fp-sep {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.15);
          margin: 0 4px;
          flex-shrink: 0;
        }
        .dlx-fp-pdot {
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.25);
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: background .2s, transform .2s;
          padding: 0;
          flex-shrink: 0;
        }
        .dlx-fp-pdot.active {
          background: #fff;
          transform: scale(1.35);
        }
        .dlx-fp-prog {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: rgba(255,255,255,0.45);
          width: 0;
          z-index: 3;
        }
        .dlx-fp-prog.run {
          animation: dlxProgBar 5.5s linear forwards;
        }
        @keyframes dlxProgBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .dlx-fp-ctr {
          position: absolute;
          bottom: 18px;
          right: 20px;
          font-family: 'Manrope', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          letter-spacing: .1em;
          z-index: 3;
          user-select: none;
        }
        @media(max-width:768px){
          #dlx-fp { min-height: 520px; }
          .dlx-fp-overlay { background: linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.7) 45%, rgba(8,8,8,0.1) 100%); }
          .dlx-fp-content { padding: 28px 20px; align-items: flex-end; }
          .dlx-fp-info { max-width: 100%; }
          .dlx-fp-desc { display: none; }
          .dlx-fp-title { font-size: clamp(20px, 6vw, 32px); margin-bottom: 4px; }
          .dlx-fp-loc { margin-bottom: 10px; }
          .dlx-fp-actions { margin-bottom: 18px; }
          .dlx-fp-cta { font-size: 10px; padding: 11px 18px; width: 100%; justify-content: center; }
          .dlx-fp-ctr { display: none; }
        }
      `}</style>

      <section id="dlx-fp">
        {/* Slide backgrounds */}
        <div className="dlx-fp-photo-panel">
          {currentProject.imgs.map((src, i) => {
            const isActive = i === slideIndex;
            return (
              <div
                key={i}
                className={`dlx-fp-slide ${isActive ? 'active' : ''} kb${i % 4}`}
                onClick={handleImageClick}
              >
                <img
                  src={src}
                  alt={`${currentProject.title} slideshow ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
        </div>

        {/* Shadow Overlay */}
        <div className="dlx-fp-overlay" />

        {/* Content Panel */}
        <div className="dlx-fp-content">
          <div className="dlx-fp-info">
            <div className="dlx-fp-eyebrow">
              <span className="dlx-fp-badge">Featured Project</span>
              <span className="dlx-fp-cat">{currentProject.cat}</span>
            </div>

            <h2 className="dlx-fp-title">{currentProject.title}</h2>
            <p className="dlx-fp-loc">{currentProject.loc}</p>
            <p className="dlx-fp-desc">{currentProject.desc}</p>

            <div className="dlx-fp-actions">
              <a href="#contact" onClick={scrollToContact} className="dlx-fp-cta">
                Get a Free Estimate
              </a>
            </div>

            {/* Pagination Controls */}
            <div className="dlx-fp-bottom">
              {currentProject.imgs.map((_, i) => (
                <button
                  key={i}
                  className={`dlx-fp-dot ${i === slideIndex ? 'active' : ''}`}
                  onClick={() => handleSlideSwitch(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}

              <div className="dlx-fp-sep" />

              {ROTATING_PROJECTS.map((_, i) => (
                <button
                  key={i}
                  className={`dlx-fp-pdot ${i === projectIndex ? 'active' : ''}`}
                  onClick={() => handleProjectSwitch(i)}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar (keyed to reset animation on slide switch) */}
        <div key={`${projectIndex}-${slideIndex}`} className="dlx-fp-prog run" />

        {/* Counter */}
        <div className="dlx-fp-ctr">{slideIndex + 1} / {currentProject.imgs.length}</div>
      </section>

      {/* Lightbox Trigger */}
      <AnimatePresence>
        {lightboxImages && (
          <Lightbox
            images={lightboxImages}
            projectTitle={lightboxTitle}
            onClose={() => setLightboxImages(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
