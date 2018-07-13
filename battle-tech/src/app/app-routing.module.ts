import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AgeOfStrifeComponent } from './age-of-strife/age-of-strife.component';


const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'age-of-strife', component: AgeOfStrifeComponent},
  { path: '', redirectTo: '/age-of-strife', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
