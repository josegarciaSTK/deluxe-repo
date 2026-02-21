
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-20 h-7 bg-contain bg-no-repeat bg-center" 
               style={{ backgroundImage: `url(https://framerusercontent.com/images/ZpxPWv13jp7ErUP2AHaGowPkec.png)` }}>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-semibold uppercase tracking-widest hover:opacity-70 transition-opacity ${
                scrolled ? 'text-zinc-800' : 'text-zinc-100'
              } ${location.pathname === link.path ? 'border-b-2 border-current' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link to="/contact" className={`px-6 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
            scrolled ? 'bg-zinc-900 text-white hover:bg-zinc-700' : 'bg-white text-zinc-900 hover:bg-zinc-200'
          }`}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-zinc-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color={scrolled ? "#000" : "#fff"} /> : <Menu color={scrolled ? "#000" : "#fff"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8">
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-manrope font-semibold text-zinc-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-10 py-4 bg-zinc-900 text-white rounded-full text-lg font-medium"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
