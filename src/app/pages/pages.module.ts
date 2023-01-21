import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { dialogAlert, HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppMaterialDesing } from '../material.desing';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
    LoginComponent,
    dialogAlert
  ],
  imports: [
    CommonModule,
    AppMaterialDesing,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports:[
    CardsComponent,
    HomeComponent,
    LoginComponent,
    dialogAlert
  ]
})
export class PagesModule { }
