// Shared within the projects feature (used by ProjectCard, ProjectFilter, useProjects)

import type { Language } from '@app-types/global.types';

export const PROJECT_CATEGORIES = ['all', 'frontend', 'backend', 'fullstack'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  /** Longer case-study text shown on the project detail page. Falls back to `description`. */
  longDescription?: Record<Language, string>;
  tags: string[];
  /** Full technical stack shown on the project detail page. Falls back to `tags`. */
  stack?: string[];
  /** Numbered "what was built" notes shown on the project detail page. */
  notes?: Record<Language, string[]>;
  category: Exclude<ProjectCategory, 'all'>;
  githubUrl: string;
  liveUrl?: string;
  thumbnail?: string;
}
