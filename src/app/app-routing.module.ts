import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/admin/users/user/user.component';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { adminGuard } from 'src/core/admin.guard';
import { dashboardGuard } from 'src/core/dashboard.guard';

const routes: Routes = [
   {path:'',redirectTo:'login',pathMatch:'full'} ,
   {path:'login', component:LoginComponent, canActivate:[adminGuard]} ,
   {path:'', loadChildren:() => import('../admin/admin.module').then(m=>m.AdminModule) }, 
   {path:'user', component:UserComponent, canActivate:[dashboardGuard]} ,
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
