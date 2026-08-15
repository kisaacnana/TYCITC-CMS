import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

export const HomePage = lazy(() => import('src/pages/home'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const MediaPage = lazy(() => import('src/pages/cms-media'));
export const EventsPage = lazy(() => import('src/pages/cms-events'));
export const PagesPage = lazy(() => import('src/pages/cms-pages'));
export const MessagesPage = lazy(() => import('src/pages/cms-messages'));
export const SettingsPage = lazy(() => import('src/pages/cms-settings'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'posts', element: <BlogPage /> },
        { path: 'events', element: <EventsPage /> },
        { path: 'pages', element: <PagesPage /> },
        { path: 'media', element: <MediaPage /> },
        { path: 'messages', element: <MessagesPage /> },
        { path: 'users', element: <UserPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
