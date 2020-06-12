import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Profile',
    //icon: 'shopping-cart-outline',
    link: '/pages/Profile',
    // home: true,
  },
  {
    title: 'Generate QR CODE',
    //icon: '',
    link: '/pages/Generate QR CODE',
  },
  {
    title: 'Member',
    //icon: 'layout-outline',
    link: '/pages/Member'
  },
  {
    title: 'AboutUs',
    //icon: 'edit-2-outline',
    link: '/pages/AboutUs',
  },
  {
    title: 'Features',
    //icon: 'edit-2-outline',
    link: '/pages/Features',
  },
  {
    title: 'Wings',
    //icon: 'keypad-outline',
    link: '/pages/Wings',
  },
  {
    title: 'Auth',
    //icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
