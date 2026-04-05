
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string; // 'Kitchen' | 'Bathroom' | 'Other'
  duration: string;
  description: string;
  testimonial: string;
  client: string;
  image: string; // Cover/thumbnail image
  clientImage: string;
  afterImages: string[];  // After photos only
  beforeImages: string[]; // Before photos only
}

export interface ProjectFolder {
  id: string;
  name: string;
  coverImage: string;
  projects: Project[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}
