import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    //   path: '',
    //   redirectTo: '/Dashboard',
    //   pathMatch: 'full'
    // },
    {
      path: 'Dashboard',
     // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule);
     component : DashboardComponent
    },
    {
      path: 'Member',
      loadChildren: () => import('./member/member.module')
        .then(m => m.MemberModule),
    },
    {
      path: 'GenerateQRCODE',
      loadChildren: () => import('./generate-qrcode/generate-qrcode.module')
        .then(m => m.GenerateQRCodeModule),
    },
    {
      path: 'Features',
      loadChildren: () => import('./feature/feature.module')
        .then(m => m.FeatureModule),
    },
    {
      path: 'Profile',
      loadChildren: () => import('./profile/profile.module')
        .then(m => m.ProfileModule)
    },
    {
      path: 'Wings',
      loadChildren: () => import('./wings/wings.module')
        .then(m => m.WingsModule),
    },
    {
      path: 'AboutUs',
      loadChildren: () => import('./about-us/about-us.module')
        .then(m => m.AboutUsModule),
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
