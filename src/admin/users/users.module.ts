import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component'; 
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule ,
    MatDialogModule ,
    NgxPaginationModule
  ]
})
export class UsersModule { }
