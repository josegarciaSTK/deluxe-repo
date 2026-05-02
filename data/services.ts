
export interface Service {
  id: string;
  name: string;
  description: string;
  details: string[];
  image: string;
  icon: string;
  stats?: { label: string; value: string }[];
}

export const SERVICES: Service[] = [
  {
    id: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    description: 'Bespoke culinary spaces designed for both elegance and performance.',
    details: [
      'Custom Cabinetry Design & Install',
      'Quartz & Natural Stone Countertops',
      'Designer Backsplash Tilework',
      'Modern Lighting & Electrical Updates',
      'Professional Appliance Integration',
      'Open-Concept Layout Transformations'
    ],
    image: '/images/vlp-kitchen/kitchen-1.jpg',
    icon: 'ChefHat',
    stats: [
      { label: 'Avg Timeline', value: '3-5 Weeks' },
      { label: 'Value Increase', value: '15-20%' }
    ]
  },
  {
    id: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    description: 'Transform your daily routine with a spa-like sanctuary tailored to your style.',
    details: [
      'Custom Large-Format Tilework',
      'Frameless Glass Enclosures',
      'Luxury Vanities & Double Sinks',
      'Spa-Inspired Rainfall Showers',
      'Modern Plumbing & Hardware',
      'Integrated Lighting & Mirrors'
    ],
    image: '/images/vlp-bathroom/bath-1.jpg',
    icon: 'Bath',
    stats: [
      { label: 'Avg Timeline', value: '2-3 Weeks' },
      { label: 'ROI Estimate', value: '60-70%' }
    ]
  },
  /* 
  {
    id: 'new-construction',
    name: 'New Construction',
    description: 'Bringing blueprints to life with uncompromising quality and structural integrity.',
    details: [
      'Full Structural Framing',
      'Foundation & Site Prep',
      'Complete Utility Rough-ins',
      'Modern Architectural Finishes',
      'Code-Compliant Inspections',
      'Custom Home Extensions'
    ],
    image: '/images/vlp-after/after-exterior.jpg',
    icon: 'Home',
    stats: [
      { label: 'Efficiency', value: 'A+' },
      { label: 'Warranty', value: '10 Year' }
    ]
  },
  */
  {
    id: 'flooring-solutions',
    name: 'Flooring Solutions',
    description: 'Premium surfaces that anchor your home with durability and timeless design.',
    details: [
      'LVP & SPC Waterproof Flooring',
      'Luxury Ceramic & Porcelain Tile',
      'Hardwood Refinishing & Install',
      'Subfloor Preparation & Leveling',
      'Custom Staircase Transitions',
      'Commercial Grade Applications'
    ],
    image: '/images/flooring-winter-garden/1.jpg',
    icon: 'Layout',
    stats: [
      { label: 'Durability', value: 'Lifetime' },
      { label: 'Daily Speed', value: '500+ sqft' }
    ]
  },
  {
    id: 'specialty-renovations',
    name: 'Specialty Renovations',
    description: 'Unique architectural details that define the character of your residence.',
    details: [
      'Custom Staircase Railings',
      'Built-in Mudrooms & Closets',
      'Barn Door Design & Install',
      'Exterior Painting & Curb Appeal',
      'Structural Wall Removal',
      'Whole Home Transformations'
    ],
    image: '/images/vlp-staircase/stairs-1.jpg',
    icon: 'Palette',
    stats: [
      { label: 'Craftsmanship', value: 'Expert' },
      { label: 'Customization', value: 'Full' }
    ]
  }
];
