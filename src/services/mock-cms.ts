import type {
  ContactMessage,
  Event,
  MediaAsset,
  Page,
  Post,
  CmsUser,
} from 'src/types/cms';

const users: CmsUser[] = [
  {
    id: 'usr_1',
    name: 'TYCITC Admin',
    email: 'admin@example.com',
    role: 'super_admin',
    active: true,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
  },
];

const posts: Post[] = [];
const events: Event[] = [];
const pages: Page[] = [];
const media: MediaAsset[] = [];
const messages: ContactMessage[] = [];

const clone = <T>(value: T): T => structuredClone(value);

export const cmsService = {
  async getPosts(): Promise<Post[]> {
    return clone(posts);
  },
  async getEvents(): Promise<Event[]> {
    return clone(events);
  },
  async getPages(): Promise<Page[]> {
    return clone(pages);
  },
  async getMedia(): Promise<MediaAsset[]> {
    return clone(media);
  },
  async getMessages(): Promise<ContactMessage[]> {
    return clone(messages);
  },
  async getUsers(): Promise<CmsUser[]> {
    return clone(users);
  },
};
