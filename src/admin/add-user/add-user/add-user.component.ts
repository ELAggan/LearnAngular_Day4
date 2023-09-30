import { Component } from '@angular/core';
import { UserService } from 'src/admin/users/user.service';
import {   FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MatDialog,  MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  model:any={}
  photoName:string="" 
  url:string=""
  userForm!: FormGroup
constructor(private serv:UserService, 
            private fb: FormBuilder ,
    ){}


ngOnInit(){  
  this.createForm()
}
createForm(){
  this.userForm = this.fb.group(
    {
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      password_confirmation:['',[Validators.required]],
      
      role:['',[Validators.required]],
      
      avatar:['',[Validators.required]]
    }
  )
}

addUser(){
console.log(this.createFormData())
    this.serv.addUser(this.createFormData()).subscribe((data:any)=>{
    console.log("user added")
   // this.dialogRef
  })
}
createFormData(){
  let form = new FormData()
  Object.entries(this.userForm.value).forEach(([key,value]:any)=>{
    form.append(key,value)
  })
  return form
}



selecedPhoto( event:Event){
  const target = event.target as HTMLInputElement;
  const files = target.files as FileList;
  console.log(files[0])
  this.userForm.get("avatar")?.setValue(files[0])
}

}







 