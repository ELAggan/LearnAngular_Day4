import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HttpClientModule } from '@angular/common/http'; 
 
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/core/core.module';
import { InterceptorModule } from 'src/interceptor/interceptor.module';
import { LoginModule } from 'src/auth/login/login.module';
import { AddUserModule } from 'src/admin/add-user/add-user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  

 
    ToastrModule.forRoot(),

     CoreModule  ,
     InterceptorModule,
     LoginModule,
     AddUserModule
     
     
  ],
  exports:[
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 