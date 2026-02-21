
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 py-16 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-12">
             <div className="w-24 h-8 bg-contain bg-no-repeat bg-center" 
               style={{ backgroundImage: `url(https://framerusercontent.com/images/ZpxPWv13jp7ErUP2AHaGowPkec.png)`, filter: 'invert(1)' }}>
            </div>
            <nav className="hidden sm:flex gap-8">
              <Link to="/about" className="text-zinc-500 hover:text-zinc-900 transition-colors">About</Link>
              <Link to="/services" className="text-zinc-500 hover:text-zinc-900 transition-colors">Services</Link>
              <Link to="/projects" className="text-zinc-500 hover:text-zinc-900 transition-colors">Projects</Link>
              <Link to="/blog" className="text-zinc-500 hover:text-zinc-900 transition-colors">Blog</Link>
            </nav>
          </div>
          <div className="text-zinc-400 text-sm font-manrope">
            © {new Date().getFullYear()} DLX Renovations. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
