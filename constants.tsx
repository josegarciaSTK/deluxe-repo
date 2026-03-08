
import React from 'react';
import { Hammer, Home, Paintbrush, Briefcase, Ruler, TrendingUp } from 'lucide-react';
import { Service, Project, FAQ, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'flooring',
    title: 'LVP Flooring Experts',
    description: 'At Deluxe, we specialize in Luxury Vinyl Plank (LVP) flooring, delivering elegant, durable floors installed with precision and craftsmanship. Additional expertise includes ceramic & porcelain tile, granite & marble, hardwood, and laminate. We focus on high-impact results that increase property value.',
    icon: 'Hammer',
    image: '/images/flooring-after-2.jpg'
  },
  {
    id: 'drywall',
    title: 'Drywall & Framing',
    description: 'Precision framing and drywall installation for residential and commercial projects. From massive commercial rehabilitations to high-end custom home builds, we deliver strong structures and clean, luxury-class finishes.',
    icon: 'Hammer',
    image: '/images/kitchen-after-1.jpg'
  },
  {
    id: 'rehabs',
    title: 'Residential & Commercial Rehabs',
    description: 'Full-scale property restoration and revitalization. We specialize in transforming outdated or distressed spaces into modern, high-value assets, including 150-room hotel renovations and 45,000-square-foot hospitality environments.',
    icon: 'Hammer',
    image: '/images/fixflip-after-1.jpg'
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'Specializing in ground-up builds, including custom homes and "Luxury Class A" multi-family communities featuring high-end clubhouses and premium finishes. We build legacies through meticulous attention to detail.',
    icon: 'Home',
    image: '/images/kitchen-luxe.jpg'
  },
  {
    id: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom Renovations & Remodeling',
    description: 'Transform your kitchen and bathroom into beautiful, functional spaces designed for modern living. We specialize in high-quality remodels that combine elegant design, premium materials, and expert craftsmanship to elevate the heart of your home. From custom cabinetry and luxury countertops to modern tile work, lighting, and fixtures.',
    icon: 'Home',
    image: '/images/backsplash.jpg'
  },
  {
    id: 'pre-listing-fix-flip',
    title: 'Pre-listing & Fix and Flip',
    description: 'Maximize your property\'s value with strategic renovations designed for a fast and profitable sale. We specialize in high-impact, cost-effective improvements that attract buyers and deliver the highest return on investment. From essential repairs and modern paint to full kitchen and bathroom updates, our team works with homeowners and investors to ensure every renovation is executed with speed, quality, and market appeal in mind.',
    icon: 'TrendingUp',
    image: '/images/renovation-after.jpg'
  },
  {
    id: 'design',
    title: 'Design Services',
    description: 'Elevate your space with custom design solutions that blend aesthetics and functionality. Our collaborative spirit ensures your vision is brought to life with unique ideas and technical precision.',
    icon: 'Ruler',
    image: '/images/shower-after-2.jpg'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'PUMA Store Restoration',
    category: 'Commercial Retail',
    duration: '6 weeks',
    description: 'Specialized commercial build-out for the PUMA Retail Outlet. Precision framing, high-performance drywall, and luxury retail flooring that meets global brand standards.',
    testimonial: 'Deluxe delivered our store on time and with impeccable quality. Their team handles large-scale retail requirements with ease.',
    client: 'Puma Retail Group',
    image: '/images/renovation-after.jpg',
    clientImage: '/images/deluxe-submark-black.png'
  },
  {
    id: '2',
    title: 'Holiday Inn International Drive',
    category: 'Hospitality Rehab',
    duration: '12 months',
    description: 'Massive 150-room hotel rehabilitation. Deluxe managed the complete interior transformation, including drywall, framing, and premium finishes for guest rooms and common areas.',
    testimonial: 'The scope of our hotel renovation was massive. Carlos and his team at Deluxe were the key to a successful, high-quality reopening.',
    client: 'Holiday Inn Mgmt',
    image: '/images/kitchen-luxe.jpg',
    clientImage: '/images/deluxe-submark-black.png'
  },
  {
    id: '3',
    title: 'Serenity at Lake Wales',
    category: 'Multi-Family',
    duration: 'Ongoing',
    description: 'Luxury multi-family community development. Deluxe is providing elite framing and drywall solutions for "Class A" residential units and high-end clubhouses.',
    testimonial: 'For luxury multi-family builds, Deluxe is our trusted partner. Their attention to detail on clubhouses and units is unmatched.',
    client: 'Serenity Developers',
    image: '/images/kitchen-after-1.jpg',
    clientImage: '/images/deluxe-submark-black.png'
  },
  {
    id: '4',
    title: 'Custom Luxury ADU',
    category: 'Residential',
    duration: '10 weeks',
    description: 'Ground-up construction of a luxury Accessory Dwelling Unit (ADU). High-end finishes, open-plan living, and custom cabinetry that expands the home\'s functional elegance.',
    testimonial: 'The ADU they built for us is more beautiful than our main house! Deluxe creates luxury in every square foot.',
    client: 'Private Client - Orlando',
    image: '/images/fixflip-after-1.jpg',
    clientImage: '/images/deluxe-submark-black.png'
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
  { label: 'Years experience', value: '11+', description: 'Specializing in Luxury sectors since 2015' },
  { label: 'Projects completed', value: '200+', description: 'Successful residential and commercial projects delivered with care' },
  { label: 'Expert Teams', value: '20+', description: 'Skilled professionals ensuring high-performance results' },
  { label: 'Client satisfaction', value: '100%', description: 'Our commitment to excellence ensures every client is satisfied' }
];
