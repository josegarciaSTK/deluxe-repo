
// Services have moved to data/services.ts — import SERVICES from there.

import { Project, FAQ, Stat } from './types';

// ─── PROJECTS (organized by service type) ────────────────────────────────────

export const PROJECTS: Project[] = [

  // ── KITCHEN ──────────────────────────────────────────────────────────────

  {
    id: 'vlp-kitchen',
    title: 'Kitchen Las Palmas',
    category: 'Kitchen',
    duration: '5 weeks',
    description: 'Complete kitchen transformation featuring modern two-tone shaker cabinetry, premium marble-look quartz countertops with a waterfall edge, and a single-bowl undermount black sink. Every surface was precision-finished for a sleek, contemporary result.',
    testimonial: 'Carlos and his team turned our kitchen into the centerpiece of the house. The waterfall island is absolutely stunning, and the attention to detail is unlike anything we\'ve seen.',
    client: 'Private Client – Las Palmas',
    location: 'Saint Cloud, FL',
    image: '/images/vlp-kitchen/kitchen-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/vlp-kitchen/kitchen-1.jpg',
      '/images/vlp-kitchen/kitchen-2.jpg',
      '/images/vlp-kitchen/kitchen-3.jpg',
    ],
    beforeImages: [
      '/images/vlp-before/before-5.jpg',
      '/images/vlp-before/before-6.jpg',
      '/images/vlp-before/before-7.jpg',
      '/images/vlp-before/before-8.jpg',
    ],
  },

  {
    id: 'mariana-kitchen',
    title: 'Kitchen Mariana',
    category: 'Kitchen',
    duration: '3 weeks',
    description: 'A stunning modern kitchen transformation — fresh cabinetry, premium countertops, and thoughtful design details that breathe new life into this Winter Park home.',
    testimonial: 'The transformation is absolutely incredible. Deluxe delivered exactly what we envisioned, with meticulous attention to detail and outstanding professionalism.',
    client: 'Mariana Betancourt',
    location: 'Winter Park, FL',
    image: '/images/mariana-after/after-2.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/mariana-after/after-1.jpg',
      '/images/mariana-after/after-2.jpg',
      '/images/mariana-after/after-3.jpg',
      '/images/mariana-after/after-4.jpg',
      '/images/mariana-after/after-5.jpg',
    ],
    beforeImages: [
      '/images/mariana-before/before-1.jpg',
      '/images/mariana-before/before-2.jpg',
      '/images/mariana-before/before-3.jpg',
      '/images/mariana-before/before-4.jpg',
      '/images/mariana-before/before-5.jpg',
      '/images/mariana-before/before-6.jpg',
      '/images/mariana-before/before-7.jpg',
    ],
  },

  {
    id: 'nicolas-kitchen',
    title: 'Kitchen Nicolas & Ilene',
    category: 'Kitchen',
    duration: '4 weeks',
    description: 'Full kitchen remodel for Nicolas & Ilene featuring updated cabinetry, new countertops, and modern finishes throughout — a complete transformation that elevated the entire main living space.',
    testimonial: '',
    client: 'Nicolas & Ilene',
    location: 'St. Cloud, FL',
    image: '/images/nicolas-kitchen/after-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/nicolas-kitchen/after-1.jpg',
      '/images/nicolas-kitchen/after-2.jpg',
    ],
    beforeImages: [
      '/images/nicolas-kitchen/before-1.jpg',
      '/images/nicolas-kitchen/before-2.jpg',
      '/images/nicolas-kitchen/before-3.jpg',
      '/images/nicolas-kitchen/before-4.jpg',
      '/images/nicolas-kitchen/before-5.jpg',
      '/images/nicolas-kitchen/before-6.jpg',
      '/images/nicolas-kitchen/before-7.jpg',
      '/images/nicolas-kitchen/before-8.jpg',
      '/images/nicolas-kitchen/before-9.jpg',
      '/images/nicolas-kitchen/before-10.jpg',
      '/images/nicolas-kitchen/before-11.jpg',
      '/images/nicolas-kitchen/before-12.jpg',
      '/images/nicolas-kitchen/before-13.jpg',
      '/images/nicolas-kitchen/before-14.jpg',
      '/images/nicolas-kitchen/before-15.jpg',
      '/images/nicolas-kitchen/before-16.jpg',
    ],
  },

  {
    id: 'dalia-kitchen',
    title: 'Kitchen Dalia',
    category: 'Kitchen',
    duration: '3 weeks',
    description: 'Kitchen renovation project for Dalia Cabani in Winter Garden — capturing the existing space and preparing it for a transformation with updated materials, refined finishes, and a clean modern aesthetic.',
    testimonial: '',
    client: 'Dalia Cabani',
    location: 'Winter Garden, FL',
    image: '/images/dalia-kitchen/after-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/dalia-kitchen/after-1.jpg',
      '/images/dalia-kitchen/after-2.jpg',
      '/images/dalia-kitchen/after-3.jpg',
      '/images/dalia-kitchen/after-4.jpg',
      '/images/dalia-kitchen/after-5.jpg',
      '/images/dalia-kitchen/after-6.jpg',
    ],
    beforeImages: [
      '/images/dalia-kitchen/1.jpg',
      '/images/dalia-kitchen/2.jpg',
      '/images/dalia-kitchen/3.jpg',
      '/images/dalia-kitchen/4.jpg',
      '/images/dalia-kitchen/5.jpg',
      '/images/dalia-kitchen/6.jpg',
    ],
  },

  // ── BATHROOM ─────────────────────────────────────────────────────────────

  {
    id: 'vlp-bathroom-master',
    title: 'Bathroom Las Palmas',
    category: 'Bathroom',
    duration: '3 weeks',
    description: 'A spa-like master bathroom renovation with large-format vertical tile, a frameless glass shower with black hardware, custom vanity with quartz top, and modern hexagon floor tiling.',
    testimonial: 'The master bath feels like a five-star spa. The tilework is flawless, and the frameless shower is exactly what we envisioned. Deluxe exceeded every expectation.',
    client: 'Private Client – Las Palmas',
    location: 'Saint Cloud, FL',
    image: '/images/vlp-bathroom/bath-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/vlp-bathroom/bath-1.jpg',
      '/images/vlp-bathroom/bath-2.jpg',
      '/images/vlp-bathroom/bath-3.jpg',
      '/images/vlp-bathroom/bath-4.jpg',
      '/images/vlp-bathroom/bath-5.jpg',
      '/images/vlp-bathroom/bath-6.jpg',
    ],
    beforeImages: [
      '/images/vlp-before/before-2.jpg',
      '/images/vlp-before/before-4.jpg',
    ],
  },

  {
    id: 'shower-winter-garden',
    title: 'Shower Winter Garden',
    category: 'Bathroom',
    duration: '1 week',
    description: 'Custom shower tile installation in Winter Garden — precision tile work with meticulous grout lines, creating a clean and contemporary bathroom finish.',
    testimonial: '',
    client: 'Private Client',
    location: 'Winter Garden, FL',
    image: '/images/shower-winter-garden/1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/shower-winter-garden/1.jpg',
      '/images/shower-winter-garden/2.jpg',
      '/images/shower-winter-garden/3.jpg',
      '/images/shower-winter-garden/4.jpg',
      '/images/shower-winter-garden/5.jpg',
      '/images/shower-winter-garden/6.jpg',
    ],
    beforeImages: [],
  },

  // ── STAIRCASE ────────────────────────────────────────────────────────────

  {
    id: 'vlp-staircase',
    title: 'Staircase Las Palmas',
    category: 'Staircase',
    duration: '2 weeks',
    description: 'A beautifully crafted custom staircase featuring high-contrast patterned tile risers, natural wood treads, and a modern black metal railing system that serves as the architectural focal point of the home.',
    testimonial: 'The staircase completely elevates the entryway. It\'s the first thing guests notice and it sets the tone for the entire home. Outstanding craftsmanship by the Deluxe crew.',
    client: 'Private Client – Las Palmas',
    location: 'Saint Cloud, FL',
    image: '/images/vlp-staircase/stairs-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/vlp-staircase/stairs-1.jpg',
      '/images/vlp-staircase/stairs-2.jpg',
      '/images/vlp-staircase/stairs-3.jpg',
      '/images/vlp-staircase/stairs-4.jpg',
      '/images/vlp-staircase/stairs-5.jpg',
    ],
    beforeImages: [],
  },

  // ── BACKSPLASH ───────────────────────────────────────────────────────────

  {
    id: 'backsplash-new-smyrna',
    title: 'Backsplash New Smyrna',
    category: 'Kitchen',
    duration: '3 days',
    description: 'Custom backsplash tile installation in New Smyrna Beach — a bold, precision-laid tile pattern that adds character and dimension to the kitchen.',
    testimonial: '',
    client: 'Private Client',
    location: 'New Smyrna Beach, FL',
    image: '/images/backsplash-new-smyrna/1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/backsplash-new-smyrna/1.jpg',
      '/images/backsplash-new-smyrna/2.jpg',
      '/images/backsplash-new-smyrna/3.jpg',
    ],
    beforeImages: [],
  },

  // ── MUDROOM ──────────────────────────────────────────────────────────────

  {
    id: 'vlp-mudcloset',
    title: 'Mudroom Las Palmas',
    category: 'Mudroom',
    duration: '1 week',
    description: 'Custom built-in mudroom featuring a natural wood bench and shelving, shiplap backing with black hooks, and integrated cubby storage — designed for elegant daily organization.',
    testimonial: 'The mudroom is one of those details that makes this house feel like a true custom home. Practical, beautiful, and built to last. Deluxe thinks of everything.',
    client: 'Private Client – Las Palmas',
    location: 'Saint Cloud, FL',
    image: '/images/vlp-mudcloset/mudcloset-1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/vlp-mudcloset/mudcloset-1.jpg',
      '/images/vlp-mudcloset/mudcloset-2.jpg',
      '/images/vlp-mudcloset/mudcloset-3.jpg',
    ],
    beforeImages: [],
  },

  // ── FLOORING ─────────────────────────────────────────────────────────────

  {
    id: 'flooring-winter-garden',
    title: 'Flooring Winter Garden',
    category: 'Flooring',
    duration: '1 week',
    description: 'LVP flooring installation in Winter Garden — a clean, durable, and stylish flooring replacement that modernizes the space with minimal disruption.',
    testimonial: '',
    client: 'Private Client',
    location: 'Winter Garden, FL',
    image: '/images/flooring-winter-garden/1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/flooring-winter-garden/1.jpg',
      '/images/flooring-winter-garden/2.jpg',
      '/images/flooring-winter-garden/3.jpg',
      '/images/flooring-winter-garden/4.jpg',
      '/images/flooring-winter-garden/5.jpg',
    ],
    beforeImages: [],
  },

  // ── OTHER ────────────────────────────────────────────────────────────────

  {
    id: 'vlp-exterior',
    title: 'Full Home Las Palmas',
    category: 'Other',
    duration: '8 weeks',
    description: 'Complete exterior transformation including fresh architectural paint, enhanced landscaping, a new front entrance, and premium curb appeal details that showcase the full scale of this renovation.',
    testimonial: 'From the moment you pull up, this house looks like a completely different property. The exterior transformation is breathtaking. Deluxe delivered a true dream home.',
    client: 'Private Client – Las Palmas',
    location: 'Saint Cloud, FL',
    image: '/images/vlp-after/after-exterior.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/vlp-after/after-exterior.jpg',
      '/images/vlp-after/after-1.jpg',
      '/images/vlp-after/after-2.jpg',
      '/images/vlp-after/after-3.jpg',
    ],
    beforeImages: [
      '/images/vlp-before/before-1.jpg',
      '/images/vlp-before/before-2.jpg',
      '/images/vlp-before/before-3.jpg',
      '/images/vlp-before/before-4.jpg',
    ],
  },

  {
    id: 'barn-door-winter-garden',
    title: 'Barn Door Winter Garden',
    category: 'Other',
    duration: '2 days',
    description: 'Custom barn door installation in Winter Garden — a statement hardware piece that adds rustic character and a modern farmhouse aesthetic to the interior.',
    testimonial: '',
    client: 'Private Client',
    location: 'Winter Garden, FL',
    image: '/images/barn-door/1.jpg',
    clientImage: '/images/deluxe-submark-black.png',
    afterImages: [
      '/images/barn-door/1.jpg',
    ],
    beforeImages: [],
  },

];

export const FAQS: FAQ[] = [
  {
    question: 'What area are you based in?',
    answer: 'We serve Saint Cloud, FL and the surrounding Florida areas. We are available 24/7 for emergency services.'
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
