import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { adminGuard } from 'src/core/admin.guard';
import { dashboardGuard } from 'src/core/dashboard.guard';

const routes: Routes = [
  {path:'',component:NavbarComponent,
  canActivateChild:[  ],
  children:[
    {path:'user', loadChildren:() => import('..//admin//users//users.module').then(m=>m.UsersModule)}
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
