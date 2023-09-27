import { Component  } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm!:FormGroup

  constructor(private fp:FormBuilder,
              private serv:LoginService,
              private toaster:ToastrService ){

  }
  
  ngOnInit(){
    this.createForm()


  }

  createForm(){
    //const pss="*"
    this.loginForm = this.fp.group(
      {
        email:['',[Validators.required,Validators.email]],
        
        password:['',Validators.required]
      }
    )
  }
  go(){
    this.serv.login(this.loginForm.value).subscribe((data:any)=>{
      localStorage.setItem('token',data.data.token)
      let audio = new Audio()
      audio.src ="..\\..\\..\\assets\\audio\\camerashutter.wav"
      audio.load()
      audio.play()
      this.toaster.success(data.message,'',{
        timeOut:20000
      })
       
    }
    // ,error => {
 
    //   this.toaster.error(error.error.message,'',{
    //     timeOut:20000
    //   })
    // }
    
    )
  }
}
