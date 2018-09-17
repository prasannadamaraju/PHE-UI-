import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-adminlogin', pathMatch: 'full' },
  { path: 'app-adminlogin',     component: AdminloginComponent },
  { path: 'app-admin-homepage',     component: AdminHomepageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
