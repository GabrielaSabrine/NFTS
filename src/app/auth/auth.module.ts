
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {  FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,

  ],
  imports: [

    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
    
  ]
})
export class AuthModule { }
