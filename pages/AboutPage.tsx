
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STATS } from '../constants';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: "Unmatched Craftsmanship",
      description: "We take pride in every detail, ensuring every project is built to the highest standards of quality and durability.",
      icon: <Award className="text-zinc-900" size={24} />
    },
    {
      title: "Turnkey Solutions",
      description: "From design to final walkthrough, we handle the complexities of construction so you can enjoy the transformation process.",
      icon: <CheckCircle2 className="text-zinc-900" size={24} />
    },
    {
      title: "Investor Focused",
      description: "Having mastered the flip market since 2016, we understand the balance between high-end aesthetics and maximum ROI.",
      icon: <ShieldCheck className="text-zinc-900" size={24} />
    },
    {
      title: "Collaborative Spirit",
      description: "Your vision is our priority. We work closely with clients, architects, and designers to bring unique ideas to life.",
      icon: <Users className="text-zinc-900" size={24} />
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-[#152218] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-xs font-manrope font-bold uppercase tracking-wider mb-8">
              Our Story
            </span>
            <h1 className="text-5xl md:text-8xl font-manrope font-medium text-white leading-tight mb-8">
              Building legacies, <br /><span className="text-zinc-400">one detail at a time.</span>
            </h1>
            <p className="text-xl md:text-2xl font-manrope text-zinc-400 leading-relaxed max-w-2xl">
              Building legacies, one detail at a time. We are a premier construction and renovation company dedicated to transforming visions into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
              {...fadeIn}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                    alt="Luxury interior construction"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#152218] p-10 hidden md:flex flex-col justify-center text-white">
                  <span className="text-5xl font-manrope font-light mb-2">15+</span>
                  <p className="text-zinc-400 font-manrope uppercase tracking-widest text-xs font-bold leading-tight">
                    Years of excellence in building
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 leading-tight">
                Rooted in precision, <br />driven by vision.
              </h2>
              <div className="space-y-6 text-lg text-zinc-600 font-manrope leading-relaxed">
                <p>
                  Founded by <span className="font-bold text-zinc-900">Carlos Jimenez</span>, owner and founder of 24/7 Deluxe Renovations LLC and Deluxe Drywall and Framing, we began with a simple mission: to elevate the standard of construction through meticulous attention to detail and unwavering integrity.
                </p>
                <p>
                  Based in <span className="font-bold text-zinc-900">Saint Cloud, Florida</span>, our journey has taken us from high-end custom home builds to massive commercial rehabilitations—including 150-room hotel renovations and 45,000-square-foot hospitality environments.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center md:text-left"
              >
                <h3 className="text-6xl font-manrope font-light text-zinc-900 mb-2">{stat.value}</h3>
                <p className="text-zinc-500 font-manrope uppercase tracking-widest text-xs font-bold mb-4">{stat.label}</p>
                <p className="text-zinc-600 font-manrope text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-manrope font-medium text-zinc-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-zinc-500 font-manrope">The principles that guide every nail we drive and every design we draft.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white border border-zinc-100 hover:bg-zinc-50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-zinc-100 flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h3 className="text-xl font-manrope font-bold text-zinc-900 mb-4">{value.title}</h3>
                <p className="text-zinc-500 font-manrope leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto bg-zinc-900 p-12 md:p-24 text-center text-white overflow-hidden relative"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-manrope font-medium mb-8 leading-tight">Ready to start your next masterpiece?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Link to="/contact" className="px-10 py-4 bg-white text-zinc-900 rounded-full font-bold font-manrope hover:bg-zinc-200 transition-all flex items-center gap-3">
                Work with us
                <ArrowRight size={20} />
              </Link>
              <Link to="/projects" className="px-10 py-4 border border-white/20 text-white rounded-full font-bold font-manrope hover:bg-white/10 transition-all">
                View our portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
