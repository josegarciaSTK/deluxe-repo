
import React from 'react';
import { Hammer, Home, Paintbrush, Briefcase, Ruler, TrendingUp } from 'lucide-react';
import { Service, Project, FAQ, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'flooring',
    title: 'Floor Specialists',
    description: 'Expert installation of Carpet, Ceramic & Porcelain Tile, Granite & Marble, Hardwood, Laminates, and Luxury Vinyl Plank (LVP). We ensure great looking, long-lasting floors.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581858726768-fdff298d669e?q=80&w=2671'
  },
  {
    id: 'drywall',
    title: 'Drywall & Framing',
    description: 'Precision framing and drywall installation for residential and commercial projects. We specialize in high-quality finishes and structural integrity.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1504148455328-436279719911?q=80&w=2670'
  },
  {
    id: 'rehabs',
    title: 'Residential & Commercial Rehabs',
    description: 'From 150-room hotel renovations to 45,000-square-foot hospitality projects, we handle large-scale rehabilitations with precision.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671'
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'Specializing in ground-up builds, including custom homes and "Luxury Class A" multi-family communities featuring high-end clubhouses.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653'
  },
  {
    id: 'design',
    title: 'Design Services',
    description: 'Turnkey interior design services to bring your vision to life, ensuring every detail reflects luxury and functionality.',
    icon: 'Ruler',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faab6c?q=80&w=2600'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Kitchen Transformation',
    category: 'Kitchen',
    duration: '4 weeks',
    description: 'Sleek, modern design with custom cabinetry and quartz worktops, maximizing both beauty and functionality.',
    testimonial: 'Deluxe completely transformed our kitchen. The craftsmanship was outstanding and the team was incredibly professional.',
    client: 'Rachel Morgan',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670',
    clientImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100'
  },
  {
    id: '2',
    title: 'Luxury Flooring Install',
    category: 'Flooring',
    duration: '1 week',
    description: 'Installation of high-end white-oak hardwood throughout a 3,000 sq ft residence, significantly increasing property value.',
    testimonial: 'The flooring experts at Deluxe are second to none. Our new hardwood floors look absolutely magnificent.',
    client: 'Michael Turner',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2684',
    clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100'
  },
  {
    id: '3',
    title: 'Spa-style Bathroom',
    category: 'Bathroom',
    duration: '6 weeks',
    description: 'A complete bathroom overhaul featuring Carrera marble, a walk-in rainfall shower, and premium matte-black fixtures.',
    testimonial: 'Deluxe turned our outdated bathroom into a stunning modern spa. Every detail was handled with care.',
    client: 'Laura Davies',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574',
    clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'What area are you based in?',
    answer: 'We serve Saint Cloud, Orlando, and the surrounding Florida metro areas. We are available 24/7 for emergency services.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timeline varies by scope. A kitchen renovation typically takes 3-5 weeks, while full home rehabs depend on the scale of work.'
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide detailed, no-obligation estimates after an initial on-site consultation to assess your project needs.'
  }
];

export const STATS: Stat[] = [
  { label: 'Years experience', value: '15+', description: 'Since 2009, delivering elite craftsmanship across Florida' },
  { label: 'Projects completed', value: '500+', description: 'Successful residential and commercial projects delivered with care' },
  { label: 'Skilled Tradespeople', value: '30+', description: 'Our expert team ensures high-performance results on every site' },
  { label: 'Client satisfaction', value: '100%', description: 'Our commitment to quality ensures every client is fully satisfied' }
];

