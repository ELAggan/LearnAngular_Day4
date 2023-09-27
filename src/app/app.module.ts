import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HttpClientModule } from '@angular/common/http'; 
 
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from 'src/auth/login/login.module';
import { CoreModule } from 'src/core/core.module';
import { InterceptorModule } from 'src/interceptor/interceptor.module';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
 
    HttpClientModule,
 
    ToastrModule.forRoot()
    , HttpClientModule,
     LoginModule,
     CoreModule  ,
     InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 