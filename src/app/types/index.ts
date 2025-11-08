  export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    year: string;
    slug: string;
    liveUrl?: string;
    githubUrl?: string;
    content?: string;
    challenges?: string[];
    solutions?: string[];
    technologies?: string[];
    results?: {
      metric: string;
      value: string;
    }[];
  }
  
  export interface NavigationItem {
    name: string;
    href: string;
  }