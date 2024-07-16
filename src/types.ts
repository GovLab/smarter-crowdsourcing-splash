// src/types.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    icon: string;
    bgColor: string;
    link: string;
    buttons?: Array<{ label: string; link: string }>;
  }
  
  export interface Partner {
    id: number;
    name: string;
    logo: string;
    link: string;
  }
  
  export interface HomePage {
    title: string;
    description: string;
    buttons: Array<{ label: string; link: string }>;
    methodology: {
      text: string;
      graph: string;
    };
  }
  
  // Add more types as needed