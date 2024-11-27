export interface ImageProps {
  src: string;
  alt?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  images: ImageProps[];
  githubLink: string;
  liveLink: string;
}