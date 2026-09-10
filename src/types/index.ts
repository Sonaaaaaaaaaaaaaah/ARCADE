export type TextSize = 'normal' | 'large' | 'xlarge';
export type ContrastMode = 'normal' | 'high';
export type MotionMode = 'normal' | 'reduced';

export interface AccessibilitySettings {
  textSize: TextSize;
  contrast: ContrastMode;
  motion: MotionMode;
  readingMode: boolean;
  dyslexiaFont: boolean;
  highlightLinks: boolean;
  largeTargets: boolean;
  keyboardMode: boolean;
  isSpeaking: boolean;
}

export interface Hotspot {
  id: string;
  name: string;
  category: string;
  x: number; // percentage coordinates (0-100)
  y: number;
  title: string;
  description: string;
  stat: string;
  linkSection: string;
}

export interface PathwayStep {
  stage: string;
  title: string;
  description: string;
  badge: string;
  highlight: string;
}

export interface Pathway {
  id: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  coreDegree: string;
  outcomes: string[];
  steps: PathwayStep[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface JourneyStep {
  stepNumber: number;
  label: string;
  phase: string;
  tagline: string;
  description: string;
  ajceRole: string;
  realExample: string;
}

export interface Milestone {
  year: string;
  title: string;
  category: string;
  summary: string;
  details: string;
  keyMetric: string;
}

export interface AESModule {
  id: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  systemMetric: string;
  techStack: string;
}

export interface Programme {
  id: string;
  name: string;
  degree: 'B.Tech' | 'M.Tech' | 'MCA' | 'BCA' | 'BBA' | 'Ph.D';
  department: string;
  category: 'ENGINEERING' | 'COMPUTER APPLICATIONS' | 'MANAGEMENT' | 'POSTGRADUATE' | 'RESEARCH';
  duration: string;
  intake: number;
  accreditation: string[];
  shortDesc: string;
  fullDesc: string;
  keyAreas: string[];
  careers: string[];
  curriculumHighlights: string[];
}

export interface CampusZone {
  id: string;
  category: 'LEARN' | 'BUILD' | 'LIVE' | 'CREATE' | 'COMPETE' | 'CONNECT';
  title: string;
  subtitle: string;
  description: string;
  stats: string[];
  features: string[];
  atmosphere: string;
}

export interface ClubItem {
  id: string;
  name: string;
  type: string;
  lead: string;
  description: string;
  achievements: string[];
  badge: string;
}

export interface PulseItem {
  id: string;
  category: 'INNOVATION' | 'RESEARCH' | 'STUDENT LIFE' | 'GLOBAL' | 'CAREERS';
  title: string;
  date: string;
  summary: string;
  tag: string;
  readTime: string;
}

export interface ResearchWing {
  id: string;
  title: string;
  leadDomain: string;
  description: string;
  patents: string;
  collaborations: string[];
  fundedBy: string;
}
