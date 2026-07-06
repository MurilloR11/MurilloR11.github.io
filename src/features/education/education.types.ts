import type { Language } from '@app-types/global.types';

export interface EducationEntry {
  id: string;
  title: Record<Language, string>;
  institution: string;
  period: Record<Language, string>;
  description?: Record<Language, string>;
}
