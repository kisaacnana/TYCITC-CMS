import { SvgColor } from 'src/components/svg-color';

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  { title: 'Dashboard', path: '/', icon: icon('ic-analytics') },
  { title: 'Posts', path: '/posts', icon: icon('ic-blog') },
  { title: 'Events', path: '/events', icon: icon('ic-calendar') },
  { title: 'Pages', path: '/pages', icon: icon('ic-file') },
  { title: 'Media Library', path: '/media', icon: icon('ic-image') },
  { title: 'Messages', path: '/messages', icon: icon('ic-mail') },
  { title: 'Users', path: '/users', icon: icon('ic-user') },
  { title: 'Settings', path: '/settings', icon: icon('ic-settings') },
];
