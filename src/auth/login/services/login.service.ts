import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private cc:HttpClient ){

     
  }
  doLogin(model:any){
    return this.cc.post('https://stating-api.ranachat.com/auth/public/login',model);
  
  }
  doLogout(){
    localStorage.removeItem('token')
  }

}
