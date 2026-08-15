import type { CmsUserRole } from 'src/types/cms';

export type CmsPermission =
  | 'dashboard:view'
  | 'posts:read'
  | 'posts:write'
  | 'posts:publish'
  | 'events:read'
  | 'events:write'
  | 'pages:read'
  | 'pages:write'
  | 'media:read'
  | 'media:write'
  | 'messages:read'
  | 'users:read'
  | 'users:write'
  | 'settings:write';

const permissions: Record<CmsUserRole, CmsPermission[]> = {
  super_admin: [
    'dashboard:view', 'posts:read', 'posts:write', 'posts:publish',
    'events:read', 'events:write', 'pages:read', 'pages:write',
    'media:read', 'media:write', 'messages:read', 'users:read',
    'users:write', 'settings:write',
  ],
  editor: [
    'dashboard:view', 'posts:read', 'posts:write', 'posts:publish',
    'events:read', 'events:write', 'pages:read', 'pages:write',
    'media:read', 'media:write', 'messages:read',
  ],
  author: ['dashboard:view', 'posts:read', 'posts:write', 'events:read', 'media:read'],
  viewer: ['dashboard:view', 'posts:read', 'events:read', 'pages:read', 'media:read'],
};

export const can = (role: CmsUserRole, permission: CmsPermission): boolean =>
  permissions[role].includes(permission);
