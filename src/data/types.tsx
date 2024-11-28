import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  description: string;
}

export interface WritingPlatform {
  id: string;
  title: string;
  brief?: string;
  description: string;
  focuses: string[];
  links: { url: string; label: string; }[];
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

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  bullets: string[];
  oppositeContentAlign?: 'left' | 'right';
}

export interface AltTimelineProps {
  events: TimelineEvent[];
}