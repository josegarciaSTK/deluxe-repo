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
  const isHomepage = location.pathname === '/';
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Reset on route change so non-home pages start with correct state
    setScrolled(window.scrollY > 50);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Only use dark/transparent style on the homepage before scrolling past the hero
  const isDark = isHomepage && !scrolled;

  const linkClass = `text-xs font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity ${
    isDark ? 'text-zinc-100' : 'text-zinc-800'
  }`;

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark ? 'bg-transparent py-6' : 'bg-white shadow-md py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={isDark ? '/images/deluxe-white.png' : '/images/deluxe-black.png'}
            alt="Deluxe Renovations"
            className="h-8 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">

          <Link
            to="/"
            className={`${linkClass} ${location.pathname === '/' ? 'border-b-2 border-current' : ''}`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${linkClass} ${location.pathname === '/about' ? 'border-b-2 border-current' : ''}`}
          >
            About
          </Link>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1 ${linkClass} ${isServicesActive ? 'border-b-2 border-current' : ''}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-zinc-100 py-2 min-w-[260px]">
                  {/* "All Services" overview link */}
                  <Link
                    to="/services"
                    className="block px-5 py-2.5 text-[11px] font-bold text-zinc-400 uppercase tracking-widest hover:bg-zinc-50 transition-colors border-b border-zinc-100 mb-1"
                  >
                    All Services
                  </Link>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-5 py-2.5 text-xs font-semibold text-zinc-800 uppercase tracking-wide hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/projects"
            className={`${linkClass} ${location.pathname === '/projects' ? 'border-b-2 border-current' : ''}`}
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className={`${linkClass} ${location.pathname === '/contact' ? 'border-b-2 border-current' : ''}`}
          >
            Contact
          </Link>

        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className={`px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
              isDark
                ? 'bg-white text-zinc-900 hover:bg-zinc-200'
                : 'bg-zinc-900 text-white hover:bg-zinc-700'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen
            ? <X color={isDark ? '#fff' : '#1a1a1a'} />
            : <Menu color={isDark ? '#fff' : '#1a1a1a'} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center overflow-y-auto py-16">
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>

          <div className="flex flex-col items-center space-y-6 w-full px-8">
            <Link to="/" className="text-2xl font-manrope font-semibold text-zinc-900">
              Home
            </Link>
            <Link to="/about" className="text-2xl font-manrope font-semibold text-zinc-900">
              About
            </Link>

            {/* Mobile Services accordion */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center gap-2 text-2xl font-manrope font-semibold text-zinc-900"
              >
                Services
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-4 w-full bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100">
                  <Link
                    to="/services"
                    className="block px-6 py-3 text-sm font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100"
                  >
                    All Services
                  </Link>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-6 py-3 text-sm font-semibold text-zinc-800 uppercase tracking-wide border-b border-zinc-100 last:border-0 hover:bg-zinc-100 transition-colors"
                    >
                      {service.name}
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
              className="mt-4 px-10 py-4 bg-zinc-900 text-white rounded-full text-lg font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
