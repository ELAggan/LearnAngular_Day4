import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { adminGuard } from 'src/core/admin.guard';

const routes: Routes = [
  {
    path:'login',component:LoginComponent,
  canActivateChild:[adminGuard] 

}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
