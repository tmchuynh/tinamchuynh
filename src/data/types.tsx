import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconType } from 'react-icons/lib';

export interface ImageProps {
  src: string;
  alt: string;
  description: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

export interface AchievementsSectionProps {
  title: string;
  items: Achievement[];
}


export interface WritingPlatform {
  id: string;
  title: string;
  description: string;
  articles: {
    title: string;
    link: { url: string; label: string; };
    date: string;
    display: {
      icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType;
    }[];
    description: string;
    tags: string[];
  }[];
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
  inspiration?: ImageProps[];
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

export interface DevToArticle {
  id: number;
  title: string;
  canonical_url: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  collection_id?: number;
  cover_image: string;
  tag_list: string[];
}
