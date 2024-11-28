export interface ImageProps {
  src: string;
  alt: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  features?: string[];
  focuses?: string[];
  technologies?: string[];
  images: ImageProps[];
  timeline?: string[];
  inspiration?: string[];
  githubLink?: string;
  liveLink?: string;
}