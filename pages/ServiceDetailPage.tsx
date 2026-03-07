
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-white">
      {/* Header / Hero */}
      <section className="relative h-[60vh] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-zinc-900 font-bold mb-8 hover:gap-4 transition-all">
            <ArrowLeft size={18} />
            Back to services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-manrope font-medium text-zinc-900 tracking-tighter"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-24">
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-12">
            <p className="text-2xl md:text-3xl font-manrope text-zinc-600 leading-relaxed italic">
              "{service.description}"
            </p>

            <div className="space-y-8">
              <h2 className="text-3xl font-manrope font-bold text-zinc-900">Our Approach</h2>
              <p className="text-lg text-zinc-500 font-manrope leading-relaxed">
                {service.id === 'flooring' && 'At Deluxe, we specialize in Luxury Vinyl Plank (LVP) flooring, delivering elegant, durable floors installed with precision and craftsmanship.'}
                {service.id === 'drywall' && 'At Deluxe, drywall and framing are executed with precision, efficiency, and uncompromising quality, ensuring structural integrity and flawless finishes while minimizing disruption to your project.'}
                {service.id === 'rehabs' && 'We manage every rehab with a focus on quality, efficiency, and long-term value, ensuring every detail—from demolition to final finishes—meets the highest industry standards.'}
                {service.id === 'new-construction' && 'From foundation to finishing touches, our ground-up construction process delivers premium-quality homes and multi-family communities built to the highest standards of modern living.'}
                {service.id === 'kitchen-bathroom' && 'We focus on high-end finishes, efficient layouts, and premium materials, ensuring seamless execution from plumbing and electrical to the final custom details.'}
                {service.id === 'design' && 'From conceptual planning to material selection, we collaborate closely with you to create interiors that are both beautiful and purposeful.'}
                {service.id === 'fix-and-flip' && 'We help investors maximize ROI through strategic renovations. Our team delivers high-quality craftsmanship with transparent communication on budgets, schedules, and quality control — ensuring successful projects on time and on budget.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {[
                  "Discovery & Consultation",
                  "Planning & Design",
                  "Execution & Quality Control",
                  "Delivery & Final Handover"
                ].map((step, idx) => {
                  const stepDescs = [
                    'We begin by understanding your vision and goals to create a roadmap for success.',
                    'Our experts develop detailed plans and designs tailored to your specific needs.',
                    'Our team brings the vision to life with precision and constant quality checks.',
                    'We finish every project on time and with the highest level of detail for a seamless transition.'
                  ];
                  return (
                    <div key={idx} className="flex gap-4 p-6 bg-zinc-50 border border-zinc-100">
                      <CheckCircle2 className="text-zinc-900 shrink-0" />
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-1">{step}</h4>
                        <p className="text-sm text-zinc-500">{stepDescs[idx]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-12 border-t border-zinc-100">
              <h3 className="text-2xl font-manrope font-bold mb-8">Related Expertise</h3>
              <div className="flex flex-wrap gap-4">
                {SERVICES.filter(s => s.id !== service.id).map(s => (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="px-6 py-3 border border-zinc-200 hover:border-zinc-900 transition-all text-sm font-bold uppercase tracking-widest"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar CTA */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 p-10 bg-[#152218] text-white space-y-8 shadow-2xl">
              <h3 className="text-3xl font-manrope font-medium">Ready to start your transformation?</h3>
              <p className="text-zinc-400 font-manrope">
                Schedule a consultation with our experts and get a custom quote for your project today.
              </p>
              <Link to="/contact" className="flex items-center justify-between w-full p-6 bg-white text-zinc-900 font-bold hover:bg-zinc-200 transition-all">
                Book Consultation
                <ArrowRight size={20} />
              </Link>
              <div className="pt-8 border-t border-white/10 space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Direct Inquiries</div>
                <p className="text-xl font-manrope">+1 407-255-4040</p>
                <p className="text-xl font-manrope">+1 407-400-6858</p>
                <p className="text-sm text-zinc-400">Monday — Friday: 8am - 6pm</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
