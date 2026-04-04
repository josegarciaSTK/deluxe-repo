
import React from 'react';
import { Hammer, Home, Paintbrush, Briefcase, Ruler, TrendingUp } from 'lucide-react';
import { Service, Project, FAQ, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'flooring',
    title: 'LVP Flooring Experts',
    description: 'At Deluxe, we specialize in Luxury Vinyl Plank (LVP) flooring, delivering elegant, durable floors installed with precision and craftsmanship. Additional expertise includes ceramic & porcelain tile, granite & marble, hardwood, and laminate. We focus on high-impact results that increase property value.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'drywall',
    title: 'Drywall & Framing',
    description: 'Precision framing and drywall installation for residential and commercial projects. From massive commercial rehabilitations to high-end custom home builds, we deliver strong structures and clean, luxury-class finishes.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rehabs',
    title: 'Residential & Commercial Rehabs',
    description: 'Full-scale property restoration and revitalization. We specialize in transforming outdated or distressed spaces into modern, high-value assets, including hotel renovations and hospitality environments.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'Specializing in ground-up builds, including custom homes and "Luxury Class A" multi-family communities featuring high-end clubhouses and premium finishes. We build legacies through meticulous attention to detail.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom Renovations & Remodeling',
    description: 'Transform your kitchen and bathroom into beautiful, functional spaces designed for modern living. We specialize in high-quality remodels that combine elegant design, premium materials, and expert craftsmanship to elevate the heart of your home. From custom cabinetry and luxury countertops to modern tile work, lighting, and fixtures.',
    icon: 'Home',
    image: '/images/attached-kitchen.jpg'
  },
  {
    id: 'pre-listing-fix-flip',
    title: 'Pre-listing & Fix and Flip',
    description: 'Maximize your property\'s value with strategic renovations designed for a fast and profitable sale. We specialize in high-impact, cost-effective improvements that attract buyers and deliver the highest return on investment. From essential repairs and modern paint to full kitchen and bathroom updates, our team works with homeowners and investors to ensure every renovation is executed with speed, quality, and market appeal in mind.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'design',
    title: 'Design Services',
    description: 'Elevate your space with custom design solutions that blend aesthetics and functionality. Our collaborative spirit ensures your vision is brought to life with unique ideas and technical precision.',
    icon: 'Ruler',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'vlp-kitchen',
    title: '26 Village Las Palmas – Modern Kitchen',
    category: 'Kitchen',
    duration: '5 weeks',
    description: 'Complete kitchen transformation featuring modern two-tone shaker cabinetry, premium marble-look quartz countertops with a waterfall edge, and a single-bowl undermount black sink. Every surface was precision-finished for a sleek, contemporary result.',
    testimonial: 'Carlos and his team turned our kitchen into the centerpiece of the house. The waterfall island is absolutely stunning, and the attention to detail is unlike anything we\'ve seen.',
    client: 'Private Client – Las Palmas',
    image: '/images/vlp-kitchen/kitchen-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    galleryImages: [
      '/images/vlp-kitchen/kitchen-1.jpg',
      '/images/vlp-kitchen/kitchen-2.jpg',
      '/images/vlp-kitchen/kitchen-3.jpg',
      '/images/vlp-kitchen/kitchen-4.jpg',
      '/images/vlp-kitchen/kitchen-5.jpg',
      '/images/vlp-kitchen/kitchen-6.jpg',
    ],
  },
  {
    id: 'vlp-bathroom-master',
    title: '26 Village Las Palmas – Master Bathroom',
    category: 'Bathroom',
    duration: '3 weeks',
    description: 'A spa-like master bathroom renovation with large-format vertical tile, a frameless glass shower with black hardware, custom vanity with quartz top, and modern hexagon floor tiling.',
    testimonial: 'The master bath feels like a five-star spa. The tilework is flawless, and the frameless shower is exactly what we envisioned. Deluxe exceeded every expectation.',
    client: 'Private Client – Las Palmas',
    image: '/images/vlp-bathroom/bath-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    galleryImages: [
      '/images/vlp-bathroom/bath-1.jpg',
      '/images/vlp-bathroom/bath-2.jpg',
      '/images/vlp-bathroom/bath-3.jpg',
      '/images/vlp-bathroom/bath-4.jpg',
      '/images/vlp-bathroom/bath-5.jpg',
      '/images/vlp-bathroom/bath-6.jpg',
    ],
  },
  {
    id: 'vlp-staircase',
    title: '26 Village Las Palmas – Custom Staircase',
    category: 'Interior',
    duration: '2 weeks',
    description: 'A beautifully crafted custom staircase featuring high-contrast patterned tile risers, natural wood treads, and a modern black metal railing system that serves as the architectural focal point of the home.',
    testimonial: 'The staircase completely elevates the entryway. It\'s the first thing guests notice and it sets the tone for the entire home. Outstanding craftsmanship by the Deluxe crew.',
    client: 'Private Client – Las Palmas',
    image: '/images/vlp-staircase/stairs-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    galleryImages: [
      '/images/vlp-staircase/stairs-1.jpg',
      '/images/vlp-staircase/stairs-2.jpg',
      '/images/vlp-staircase/stairs-3.jpg',
      '/images/vlp-staircase/stairs-4.jpg',
      '/images/vlp-staircase/stairs-5.jpg',
    ],
  },
  {
    id: 'vlp-mudcloset',
    title: '26 Village Las Palmas – Custom Mudroom',
    category: 'Interior',
    duration: '1 week',
    description: 'Custom built-in mudroom featuring a natural wood bench and shelving, shiplap backing with black hooks, and integrated cubby storage — designed for elegant daily organization.',
    testimonial: 'The mudroom is one of those details that makes this house feel like a true custom home. Practical, beautiful, and built to last. Deluxe thinks of everything.',
    client: 'Private Client – Las Palmas',
    image: '/images/vlp-mudcloset/mudcloset-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    galleryImages: [
      '/images/vlp-mudcloset/mudcloset-1.jpg',
      '/images/vlp-mudcloset/mudcloset-2.jpg',
      '/images/vlp-mudcloset/mudcloset-3.jpg',
    ],
  },
  {
    id: 'vlp-exterior',
    title: '26 Village Las Palmas – Full Home Remodel',
    category: 'Remodel',
    duration: '8 weeks',
    description: 'Complete exterior transformation including fresh architectural paint, enhanced landscaping, a new front entrance, and premium curb appeal details that showcase the full scale of this renovation.',
    testimonial: 'From the moment you pull up, this house looks like a completely different property. The exterior transformation is breathtaking. Deluxe delivered a true dream home.',
    client: 'Private Client – Las Palmas',
    image: '/images/vlp-after/after-exterior.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    galleryImages: [
      '/images/vlp-after/after-exterior.jpg',
      '/images/vlp-after/after-1.jpg',
      '/images/vlp-after/after-2.jpg',
      '/images/vlp-after/after-3.jpg',
    ],
  },
  {
    id: 'mariana-winter-park',
    title: 'Mariana Betancourt – Winter Park Remodel',
    category: 'Remodel',
    duration: '4 weeks',
    description: 'A beautiful complete remodel in Winter Park featuring modern updates, bringing a fresh and refined elegance to every corner of the home.',
    testimonial: 'The transformation is absolutely incredible. Deluxe delivered exactly what we envisioned, with meticulous attention to detail and outstanding professionalism.',
    client: 'Mariana Betancourt',
    image: '/images/mariana-winter-park/1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    galleryImages: [
      '/images/mariana-winter-park/1.jpg',
      '/images/mariana-winter-park/2.jpg',
      '/images/mariana-winter-park/3.jpg',
      '/images/mariana-winter-park/4.jpg',
      '/images/mariana-winter-park/5.jpg',
    ],
  },
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
  { label: 'Years experience', value: '11+', description: 'Specializing in Luxury sectors since 2015' },
  { label: 'Projects completed', value: '200+', description: 'Successful residential and commercial projects delivered with care' },
  { label: 'Expert Teams', value: '20+', description: 'Skilled professionals ensuring high-performance results' },
  { label: 'Client satisfaction', value: '100%', description: 'Our commitment to excellence ensures every client is satisfied' }
];
