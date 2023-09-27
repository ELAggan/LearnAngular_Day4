import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient ) { }
  login(model:any){
    return this.http.post('https://stating-api.ranachat.com/auth/public/login',model)
  }
}
