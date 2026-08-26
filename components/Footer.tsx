
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <Link to="/" className="active:scale-95 transition-transform">
              <img src="/images/deluxe-black.png" alt="Deluxe" className="h-8 md:h-10 w-auto" />
            </Link>
            
            <nav className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-10">
              {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-xs font-manrope font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-manrope font-bold uppercase tracking-[0.3em] text-zinc-300">
              Elite Multifaceted Builders
            </p>
            <div className="text-zinc-400 text-[11px] font-manrope">
              © {new Date().getFullYear()} Deluxe Renovations. Orlando, FL.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
