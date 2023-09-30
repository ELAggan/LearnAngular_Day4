import { Component  } from '@angular/core';
import {   FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )
export class LoginComponent {
  loginForm!: FormGroup
 
constructor( private fb: FormBuilder ,
            private serv:LoginService ,
            private router: Router,
            private toaster:ToastrService){

}
ngOnInit(){  
  this.createForm()
}
createForm(){
  this.loginForm = this.fb.group(
    {
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    }
  )
}
loginClick(){
  this.serv.doLogin(this.loginForm.value).subscribe((data:any)=>{
    localStorage.setItem('token',data.data.token)
    this.toaster.success(data.message)
   this.router.navigateByUrl('/user')
   
  }) 
}

}
 

