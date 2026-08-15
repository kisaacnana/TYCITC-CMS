export const required = (value: string, field: string): string | undefined =>
  value.trim() ? undefined : `${field} is required.`;

export const validEmail = (value: string): string | undefined =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? undefined
    : 'Enter a valid email address.';

export const validSlug = (value: string): string | undefined =>
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.trim())
    ? undefined
    : 'Use lowercase letters, numbers and single hyphens only.';

export const maxLength = (value: string, limit: number, field: string): string | undefined =>
  value.length <= limit ? undefined : `${field} must be ${limit} characters or fewer.`;
