
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto bg-[#152218] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        
        {/* Left Side: Info */}
        <div className="lg:w-1/2 p-10 md:p-20 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img src="/images/deluxe-submark-white.svg" alt="" className="h-[60%] w-auto opacity-[0.03]" />
          </div>
          
          <div className="relative z-10 space-y-10">
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-manrope font-bold uppercase tracking-wider mb-5">
                Contact
              </span>
              <h2 className="text-[2.5rem] md:text-5xl font-manrope font-medium mb-5 leading-tight">Get in touch</h2>
              <p className="text-zinc-400 font-manrope text-base md:text-lg leading-relaxed max-w-sm">
                Have a vision for your space? Contact our team today to start your transformation.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:+14072554040" className="flex items-center gap-5 group active:scale-95 transition-transform">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-0.5">Call Us</h4>
                  <p className="text-base font-manrope font-medium">+1 407-255-4040</p>
                </div>
              </a>
              
              <a href="mailto:hello@dlxrenovations.com" className="flex items-center gap-5 group active:scale-95 transition-transform">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-zinc-900 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-0.5">Email Us</h4>
                  <p className="text-base font-manrope font-medium">hello@dlxrenovations.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-0.5">Studio</h4>
                  <p className="text-base font-manrope font-medium">Saint Cloud, FL 34771</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="relative z-10 mt-16 pt-10 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all active:scale-90">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-all active:scale-90">
                <Facebook size={18} />
              </a>
            </div>
            <img src="/images/deluxe-submark-white.svg" alt="" className="h-10 w-auto opacity-20" />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-white p-10 md:p-20">
          <form action="https://formsubmit.co/dlxrenovations@gmail.com" method="POST" className="space-y-5">
            <input type="hidden" name="_subject" value="New Website Lead - Deluxe Renovations!" />
            
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1">Name</label>
              <input type="text" name="name" placeholder="John Smith" required className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all font-manrope text-zinc-900" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1">Email</label>
              <input type="email" name="email" placeholder="john@example.com" required className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all font-manrope text-zinc-900" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1">Message</label>
              <textarea name="message" rows={5} placeholder="Tell us about your vision..." required className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:border-zinc-900 focus:bg-white transition-all font-manrope text-zinc-900 resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-zinc-900 text-white rounded-2xl font-manrope font-bold text-base shadow-xl active:scale-[0.98] transition-transform uppercase tracking-widest mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
