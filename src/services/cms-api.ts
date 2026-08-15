import type { ContactMessage, Event, MediaAsset, Page, Post, CmsUser } from 'src/types/cms';

const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '');

export class CmsApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = 'CmsApiError';
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  if (!API_URL) throw new CmsApiError('VITE_API_URL is not configured.');

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers ?? {}) },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new CmsApiError(body || `Request failed with status ${response.status}.`, response.status);
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const cmsApi = {
  posts: {
    list: () => request<Post[]>('/posts'),
    create: (payload: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => request<Post>('/posts', { method: 'POST', body: JSON.stringify(payload) }),
    update: (id: string, payload: Partial<Post>) => request<Post>(`/posts/${id}`, { method: 'PATCH', body: JSON.stringify(payload) }),
    remove: (id: string) => request<void>(`/posts/${id}`, { method: 'DELETE' }),
  },
  events: { list: () => request<Event[]>('/events') },
  pages: { list: () => request<Page[]>('/pages') },
  media: { list: () => request<MediaAsset[]>('/media') },
  messages: { list: () => request<ContactMessage[]>('/messages') },
  users: { list: () => request<CmsUser[]>('/users') },
};
