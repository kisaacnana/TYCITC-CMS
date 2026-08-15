export type ContentStatus = 'draft' | 'published' | 'archived';

export type CmsUserRole = 'super_admin' | 'editor' | 'author' | 'viewer';

export interface CmsUser {
  id: string;
  name: string;
  email: string;
  role: CmsUserRole;
  active: boolean;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImageUrl?: string;
  authorId: string;
  status: ContentStatus;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  location?: string;
  startsAt: string;
  endsAt?: string;
  featuredImageUrl?: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: ContentStatus;
  updatedAt: string;
}

export interface MediaAsset {
  id: string;
  name: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
  altText?: string;
  uploadedBy: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}
