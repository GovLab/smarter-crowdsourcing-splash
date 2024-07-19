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
    id: number;
    status: string;
    header: string;
    content: string;
    header_buttons: Array<{ label: string; link: string }>;
    methodology: string;
    menu: Array<{ label: string; link: string }>;
    about: string;
    methodology_graph: {
      id: string;
      storage: string;
      filename_disk: string;
      filename_download: string;
      title: string;
      type: string;
      uploaded_by: string;
      uploaded_on: string;
      filesize: number;
      width: number;
      height: number;
    };
    projects: Project[];
    partner: Partner[];
  }
  