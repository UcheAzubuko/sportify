// Layouts
import AuthLayout from '@/layout/Auth.vue';
import Main from '@/layout/Main.vue';

// Main views
import Profile from '@/views/Profile.vue';
import Buddies from '@/views/Buddies.vue';
import Discover from '@/views/Discover.vue';
import Settings from '@/views/Settings.vue';

// Auth views
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import ForgotPassword from '@/views/auth/ForgotPassword.vue';
import VerifyEmail from '@/views/auth/VerifyEmail.vue';

// Error view
import NotFound from '@/views/error/NotFound.vue';

const routes = [
  // Main routes
  {
    path: '/',
    name: 'Main',
    alias: '/discover',
    redirect: '/discover',
    meta: { auth: true },
    component: Main,
    children: [
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { title: 'Profile' },
      },
      {
        path: '/buddies',
        name: 'Buddies',
        component: Buddies,
        meta: {
          title: 'Buddies',
        },
      },
      {
        path: '/discover',
        name: 'Discover',
        component: Discover,
        meta: {
          title: 'Discover',
        },
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
          title: 'Settings',
        },
      },
    ],
  },

  // Auth routes
  {
    path: '/auth',
    name: 'Auth',
    redirect: '/auth/login',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        alias: '/login',
        component: Login,
        meta: { title: 'Login' },
      },
      {
        path: 'register',
        name: 'Register',
        alias: '/register',
        component: Register,
        meta: { title: 'Register' },
      },
      {
        path: 'forgot-password',
        name: 'ForgotPassword',
        alias: '/forgot-password',
        component: ForgotPassword,
        meta: { title: 'Forgot Password' },
      },
      {
        path: 'verify-email',
        name: 'VerifyEmail',
        alias: '/verify-email',
        component: VerifyEmail,
        meta: { title: 'Verify Email' },
      },
    ],
  },

  // Error page route
  {
    path: '/:catchAll(.*)*',
    component: NotFound,
  },
];

export default routes;
