import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'activity2',
    loadChildren: () => import('./activity2/activity2.module').then( m => m.Activity2PageModule)
  },
  {
    path: 'activity3',
    loadChildren: () => import('./activity3/activity3.module').then( m => m.Activity3PageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'goloya',
    loadChildren: () => import('./goloya/goloya.module').then( m => m.GOLOYAPageModule)
  },
  {
    path: 'calcu',
    loadChildren: () => import('./calcu/calcu.module').then( m => m.CalcuPageModule)
  },
  {
    path: 'salary',
    loadChildren: () => import('./salary/salary.module').then( m => m.SalaryPageModule)
  },
  {
    path: 'formula',
    loadChildren: () => import('./formula/formula.module').then( m => m.FormulaPageModule)
  },
  {
    path: '2/:name',
    loadChildren: () => import('./route2/route2.module').then( m => m.Route2PageModule)
  },
  {
    path: 'route1',
    loadChildren: () => import('./route1/route1.module').then( m => m.Route1PageModule)
  },
  {
    path: '3/:age',
    loadChildren: () => import('./route3/route3.module').then( m => m.Route3PageModule)
  },
  {
    path: '4/:age',
    loadChildren: () => import('./route4/route4.module').then( m => m.Route4PageModule)
  },
  {
    path: 'multiple_details',
    loadChildren: () => import('./p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'multiple_details/2',
    loadChildren: () => import('./p2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'multiple_details',
    loadChildren: () => import('./p3/p3.module').then( m => m.P3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
