import type { ContentStatus } from 'src/types/cms';

export const createSlug = (value: string): string =>
  value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const isPublished = (status: ContentStatus): boolean => status === 'published';

export const formatContentStatus = (status: ContentStatus): string =>
  status.charAt(0).toUpperCase() + status.slice(1);
