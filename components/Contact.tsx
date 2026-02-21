
import React from 'react';
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-[#152218] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Left Side: Info */}
        <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-6">
                Contact
              </span>
              <h2 className="text-5xl font-manrope font-medium mb-6">Get in touch</h2>
              <p className="text-lg text-zinc-400 font-manrope leading-relaxed">
                For any inquiries or to explore your vision further, we invite you to contact our professional team using the details provided below.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-zinc-500 tracking-widest">Office</h4>
                  <p className="text-lg font-manrope">Saint Cloude, Orlando</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-zinc-500 tracking-widest">Email</h4>
                  <p className="text-lg font-manrope">hello@dlxrenovations.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-zinc-500 tracking-widest">Telephone</h4>
                  <p className="text-lg font-manrope">+1 407-255-4040</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <h4 className="text-sm uppercase font-bold text-zinc-500 tracking-widest mb-6">Follow us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram size={20} className="text-zinc-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter size={20} className="text-zinc-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-zinc-900" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold font-manrope text-zinc-900">Name *</label>
                <input type="text" placeholder="John Smith" required className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold font-manrope text-zinc-900">Email *</label>
                <input type="email" placeholder="john@example.com" required className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold font-manrope text-zinc-900">Phone Number</label>
              <input type="tel" placeholder="+1 123 456 7890" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold font-manrope text-zinc-900">Message *</label>
              <textarea rows={6} placeholder="How can we help you?" required className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-zinc-900 text-white rounded-lg font-bold font-manrope text-lg hover:bg-zinc-800 transition-colors uppercase tracking-widest shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
