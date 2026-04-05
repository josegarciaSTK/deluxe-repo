
import React from 'react';
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-[#152218] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Left Side: Info */}
        <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Eagle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img src="/images/deluxe-submark-white.svg" alt="" className="h-[60%] w-auto opacity-[0.04]" aria-hidden="true" />
          </div>
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
                  <p className="text-lg font-manrope">Saint Cloud, FL 34771</p>
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
                  <p className="text-lg font-manrope">+1 407-400-6858</p>
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
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-zinc-900" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-20">
          <form action="https://formsubmit.co/dlxrenovations@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="New Website Lead - Deluxe Renovations!" />
            <input type="hidden" name="_next" value="https://mellifluous-kleicha-3d89ca.netlify.app/contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold font-manrope text-zinc-900">Name *</label>
                <input type="text" name="name" placeholder="John Smith" required className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold font-manrope text-zinc-900">Email *</label>
                <input type="email" name="email" placeholder="john@example.com" required className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold font-manrope text-zinc-900">Phone Number</label>
              <input type="tel" name="phone" placeholder="+1 123 456 7890" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold font-manrope text-zinc-900">Message *</label>
              <textarea name="message" rows={6} placeholder="Tell us about your project..." required className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900 transition-colors resize-none"></textarea>
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
