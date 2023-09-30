import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/auth/login/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private serv:LoginService,
              private router:Router,
              private toaster:ToastrService){

  }
  logout(){
    this.serv.doLogout()
    this.toaster.success("Looged out")
     this.router.navigateByUrl('login')
  }
}
