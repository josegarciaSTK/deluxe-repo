
import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Intro Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-manrope font-medium text-zinc-900 mb-8 leading-tight">
              Let's build <br /><span className="text-zinc-400">together.</span>
            </h1>
            <p className="text-xl md:text-2xl font-manrope text-zinc-500 leading-relaxed">
              Ready to elevate your property? We're here to discuss your next project, from luxury residential rehabs to high-end commercial builds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reusing the polished Contact component but within a page context */}
      <Contact />

      {/* Additional Map/Office section could go here if needed */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 bg-white border border-zinc-100">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Inquiries</h4>
            <p className="text-lg font-manrope text-zinc-900">hello@dlxrenovations.com</p>
            <p className="text-lg font-manrope text-zinc-900">+1 407-255-4040</p>
          </div>
          <div className="p-10 bg-white border border-zinc-100">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Office Hours</h4>
            <p className="text-lg font-manrope text-zinc-900">Mon - Fri: 8am - 6pm</p>
            <p className="text-lg font-manrope text-zinc-900">Sat - Sun: By Appointment</p>
          </div>
          <div className="p-10 bg-white border border-zinc-100">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">Headquarters</h4>
            <p className="text-lg font-manrope text-zinc-900">Saint Cloud, FL</p>
            <p className="text-lg font-manrope text-zinc-900">Orlando Metro Area</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
