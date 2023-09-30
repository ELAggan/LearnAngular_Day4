import { Component, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { AddUserComponent } from 'src/admin/add-user/add-user/add-user.component';

import {MatDialog,  MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] 
 

})
export class UserComponent {
  users:any
  page:any
  user:any
constructor(private serv:UserService,private dialog: MatDialog){}
ngOnInit(){
  this.getAllUsers()
}
getAllUsers(){
 this.serv.gtAll().subscribe((data:any) =>{
  this.users = data.data
 })
}

delete(id:any){
  this.serv.deleteUser(id).subscribe((data:any)=>{
    this.getAllUsers()
  })

}
edit(model:any){
  const dialogRef = this.dialog.open(AddUserComponent, {
    data: model,
  });

   dialogRef.afterClosed().subscribe(result => {
      

    });

}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {name: this.users},
    });

    dialogRef.afterClosed().subscribe(result => {
      

    });
  }
  nav(page:any){
    this.page = page
    this.getByPage()
    console.log( this.page )
  }
 
 getByPage(){
  this.serv.gtAllByPage(this.page).subscribe((data:any)=>{
    this.users = data.data
    //this.page = data.meta.total
  })
 }
}
