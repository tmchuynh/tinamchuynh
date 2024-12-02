import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconType } from 'react-icons/lib';

export interface CommandShortcuts {
  groupName: string;
  items: {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | IconType;
    title: string;
    onSelect: string;
    shortcut?: string;
  }[];
}

export interface BreadcrumbInfo {
  label: string;
  href?: string;
}

export interface RepoData {
  name: string;
  description: string;
  fork: boolean;
  created_at: string;
  url: string;
  topics: string[];
  languages: string[];
  languages_url: string;
};


export interface ImageProps {
  src: string;
  alt: string;
  description: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  date: string;
  formattedDate?: string;
}

export interface AchievementsSectionProps {
  title: string;
  items: Achievement[];
}


export interface WritingPlatform {
  id: string;
  title: string;
  description: string;
  focuses: string[];
  links: { url: string; label: string; }[];
}

export interface BookProject {
  id: string;
  title: string;
  description: string;
  focuses: string[];
  images: ImageProps[];
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  date: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  features?: string[];
  focuses?: string[];
  technologies?: string[];
  images?: ImageProps[];
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
