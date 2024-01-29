import { Route } from '@angular/router';
import { Error404Component } from '@modules/admin/error/error404.component';

export const appRoutes: Route[] = [

  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'main' },
  {
    path: '',
    loadComponent: () => import('@layout/layout.component').then(m => m.LayoutComponent),
    data: {
      layout: 'empty'
    },
    children: [
    {
        path: 'sign-in',
        loadChildren: () => import('@modules/auth/sign-in/sign-in.routing'),
      }
    ]
  },

  {
    path: '',
    loadComponent: () => import('@layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'main',
        loadChildren: () => import('@modules/admin/main/main.routing'),
      },
      // {
      //   path: 'order',
      //   loadChildren: () => import('./modules/admin/order/order.routing'),
      // },
      {
        path: 'invoice',
        loadChildren: () => import('./modules/admin/invoice/invoice.routing'),
      },
      {
        path: '404-not-found',
        pathMatch: 'full',
        component: Error404Component
      },
      { path: '**', redirectTo: '404-not-found' }
    ]
  },
  // {
  //   path: 'order',
  //   loadComponent: () => import('./modules/admin/order/order.component').then(m => m.OrderComponent),
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./modules/admin/order/order.routing'),
  //     }
  //   ]
  // }
];
