import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { AllInterceptor } from './all.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AllInterceptor,
      multi:true
    },

  ]
})
export class InterceptorModule { }
