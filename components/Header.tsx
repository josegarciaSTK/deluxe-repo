
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SERVICES } from '../data/services';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinkClass = `text-xs font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity ${
    scrolled ? 'text-zinc-800' : 'text-zinc-100'
  }`;

  const isServices = location.pathname.startsWith('/services');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-zinc-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={scrolled ? '/images/deluxe-black.png' : '/images/deluxe-white.png'}
              alt="Deluxe Renovations"
              className="h-7 sm:h-8 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${navLinkClass} ${location.pathname === '/' ? 'border-b-2 border-current pb-0.5' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${navLinkClass} ${location.pathname === '/about' ? 'border-b-2 border-current pb-0.5' : ''}`}
            >
              About
            </Link>

            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(v => !v)}
                className={`flex items-center gap-1 ${navLinkClass} ${isServices ? 'border-b-2 border-current pb-0.5' : ''}`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-zinc-100 py-2 min-w-[260px]">
                    <Link
                      to="/services"
                      className="block px-5 py-2.5 text-[11px] font-bold text-zinc-400 uppercase tracking-widest hover:bg-zinc-50 transition-colors border-b border-zinc-100 mb-1"
                    >
                      All Services
                    </Link>
                    {SERVICES.map(s => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className="block px-5 py-2.5 text-xs font-semibold text-zinc-800 uppercase tracking-wide hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`${navLinkClass} ${location.pathname === '/projects' ? 'border-b-2 border-current pb-0.5' : ''}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`${navLinkClass} ${location.pathname === '/contact' ? 'border-b-2 border-current pb-0.5' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                scrolled
                  ? 'bg-zinc-900 text-white hover:bg-zinc-700'
                  : 'bg-white text-zinc-900 hover:bg-zinc-200'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen
              ? <X color={scrolled ? '#1a1a1a' : '#ffffff'} size={26} />
              : <Menu color={scrolled ? '#1a1a1a' : '#ffffff'} size={26} />
            }
          </button>
        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN CASCADE MENU ───────────────────── */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center overflow-y-auto py-16">
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center space-y-6 w-full px-8">
            <Link to="/" className="text-2xl font-manrope font-semibold text-zinc-900">
              Home
            </Link>
            <Link to="/about" className="text-2xl font-manrope font-semibold text-zinc-900">
              About
            </Link>

            {/* Services with cascade */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className="flex items-center gap-2 text-2xl font-manrope font-semibold text-zinc-900"
              >
                Services
                <ChevronDown size={20} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-4 w-full bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100">
                  <Link
                    to="/services"
                    className="block px-6 py-3 text-sm font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  {SERVICES.map(s => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="block px-6 py-3 text-sm font-semibold text-zinc-800 uppercase tracking-wide border-b border-zinc-100 last:border-0 hover:bg-zinc-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" className="text-2xl font-manrope font-semibold text-zinc-900">
              Projects
            </Link>
            <Link to="/contact" className="text-2xl font-manrope font-semibold text-zinc-900">
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-10 py-4 bg-zinc-900 text-white rounded-full text-lg font-medium font-manrope"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
