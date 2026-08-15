import type { CmsUserRole } from 'src/types/cms';

export const CMS_ROLES: Record<CmsUserRole, { label: string; description: string }> = {
  super_admin: { label: 'Super Admin', description: 'Full CMS access and administration.' },
  editor: { label: 'Editor', description: 'Manage and publish website content.' },
  author: { label: 'Author', description: 'Create and manage assigned content.' },
  viewer: { label: 'Viewer', description: 'Read-only access to the CMS.' },
};

export const CMS_CONTENT_TYPES = ['posts', 'events', 'pages', 'media', 'messages', 'users', 'settings'] as const;

export type CmsContentType = (typeof CMS_CONTENT_TYPES)[number];
