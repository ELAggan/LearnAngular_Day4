import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDialog} from '@angular/material/dialog';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule 
  ]
})
export class AdminModule { }
