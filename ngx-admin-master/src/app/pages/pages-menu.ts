import { NbMenuItem } from '@nebular/theme';
import { title } from 'process';
import { Component } from '@angular/core';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    link: '/pages/Dashboard',
    home: true,
    pathMatch: 'full',
  },
  {
    title: 'Profile',
    //icon: 'shopping-cart-outline',
    link: '/pages/Profile'
  },
  {
    title: 'GenerateQRCODE',
    link: '/pages/GenerateQRCODE',
  },
  {
    title: 'Member',
    link: '/pages/Member'
  },
  {
    title: 'AboutUs',
    link: '/pages/AboutUs',
  },
  {
    title: 'Features',
    link: '/pages/Features',
  },
  {
    title: 'Wings',
    // icon: 'keypad-outline',
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
      }
      // {
      //   title: 'Request Password',
      //   link: '/auth/request-password',
      // },
      // {
      //   title: 'Reset Password',
      //   link: '/auth/reset-password',
      // },
    ],
  },
];
