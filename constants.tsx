
import React from 'react';
import { Hammer, Home, Paintbrush, Briefcase, Ruler, TrendingUp } from 'lucide-react';
import { Service, Project, FAQ, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'flooring',
    title: 'LVP Flooring Experts',
    description: 'At Deluxe, we specialize in Luxury Vinyl Plank (LVP) flooring, delivering elegant, durable floors installed with precision and craftsmanship. Additional expertise includes ceramic & porcelain tile, granite & marble, hardwood, and laminate.',
    icon: 'Hammer',
    image: '/images/flooring.jpg'
  },
  {
    id: 'drywall',
    title: 'Drywall & Framing',
    description: 'Precision framing and drywall installation for residential and commercial projects, delivering strong structures and clean, high-end finishes.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1504148455328-436279719911?q=80&w=2670'
  },
  {
    id: 'rehabs',
    title: 'Residential & Commercial Rehabs',
    description: 'Full-scale property restoration and revitalization, transforming outdated or distressed spaces into modern, high-value assets with expert design and structural integrity.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2671'
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'Specializing in ground-up builds, including custom homes and "Luxury Class A" multi-family communities featuring high-end clubhouses and premium finishes.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653'
  },
  {
    id: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom Renovations',
    description: 'Expertly crafted kitchen and bathroom transformations that combine luxury, functionality, and timeless design to enhance your home\'s value and comfort.',
    icon: 'Home',
    image: '/images/bathroom.jpg'
  },
  {
    id: 'design',
    title: 'Design Services',
    description: 'Elevate your space with custom design solutions that blend aesthetics and functionality, tailored to reflect your unique style and needs.',
    icon: 'Ruler',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faab6c?q=80&w=2600'
  },
  {
    id: 'fix-and-flip',
    title: 'Pre-Listing & Fix and Flip',
    description: 'Strategic property renovations designed to maximize ROI for investors and homeowners preparing to sell. From multi-unit residential to hotels and retail spaces, we deliver high-quality transformations on time and on budget.',
    icon: 'TrendingUp',
    image: '/images/fix-and-flip.jpg'
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
    image: '/images/bathroom.jpg',
    clientImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100'
  },
  {
    id: '2',
    title: 'Luxury LVP Flooring Install',
    category: 'Flooring',
    duration: '1 week',
    description: 'Installation of premium Luxury Vinyl Plank flooring throughout a 3,000 sq ft residence, significantly increasing property value.',
    testimonial: 'The flooring experts at Deluxe are second to none. Our new LVP floors look absolutely magnificent.',
    client: 'Michael Turner',
    image: '/images/flooring.jpg',
    clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100'
  },
  {
    id: '3',
    title: 'Spa-style Bathroom Renovation',
    category: 'Bathroom',
    duration: '6 weeks',
    description: 'A complete bathroom overhaul featuring Carrera marble, a walk-in rainfall shower, and premium matte-black fixtures.',
    testimonial: 'Deluxe turned our outdated bathroom into a stunning modern spa. Every detail was handled with care.',
    client: 'Laura Davies',
    image: '/images/bathroom.jpg',
    clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100'
  },
  {
    id: '4',
    title: 'Fix & Flip Property Rehab',
    category: 'Fix & Flip',
    duration: '8 weeks',
    description: 'Complete property transformation for investor client — from outdated distressed property to modern, market-ready home with premium finishes.',
    testimonial: 'Deluxe maximized our ROI on this flip. The quality of work exceeded our expectations and the property sold above asking price.',
    client: 'David Chen',
    image: '/images/fix-and-flip.jpg',
    clientImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100'
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
  },
  {
    question: 'Do you work with real estate investors?',
    answer: 'Absolutely! We specialize in Fix & Flip and Pre-Listing renovations, helping investors maximize ROI with high-quality, on-budget transformations.'
  }
];

export const STATS: Stat[] = [
  { label: 'Years experience', value: '10+', description: 'Since 2015, delivering elite craftsmanship across Florida' },
  { label: 'Projects completed', value: '200+', description: 'Successful residential and commercial projects delivered with care' },
  { label: 'Skilled Teams', value: '20+', description: 'Our expert teams ensure high-performance results on every site' },
  { label: 'Client satisfaction', value: '100%', description: 'Our commitment to quality ensures every client is fully satisfied' }
];
