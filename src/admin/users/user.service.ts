import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  gtAll(){
    return this.http.get('https://stating-api.ranachat.com/users')
  }
  gtAllByPage(id:any){
    let params = new HttpParams().set('page',id)
    console.log(params)
    return this.http.get('https://stating-api.ranachat.com/users',{params})
  }
  addUser(model:any){
    return this.http.post('https://stating-api.ranachat.com/users',model)
  }
  deleteUser(id:any){
    return this.http.delete('https://stating-api.ranachat.com/users/'+id)
  }
  editUser(id:any,model:any){
    return this.http.post('https://stating-api.ranachat.com/users/'+id,model)
  }
  
}

 