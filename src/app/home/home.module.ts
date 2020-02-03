import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture/picture.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [PictureComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
