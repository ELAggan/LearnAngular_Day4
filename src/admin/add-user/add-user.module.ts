import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';

import {   FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AddUserComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})
export class AddUserModule { }
