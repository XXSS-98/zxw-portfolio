export interface DesignProject {
  id: string;
  title: string;
  description: string;
  category: DesignCategory;
  imageSrc: string;
  tags: string[];
}

export type DesignCategory =
  | 'brand-visual-identity'
  | 'graphic-layout'
  | 'ecommerce-visual'
  | 'ui-new-media'
  | 'creative-artistic'
  | 'other';

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  videoSrc: string;
  duration: string;
  tags: string[];
}

export type VideoCategory =
  | 'cartoon-creative'
  | 'children-story'
  | 'fire-safety';

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'milestone' | 'project' | 'achievement';
}

export interface NavItem {
  label: string;
  href: string;
}
