import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';


export const routesAuth: Routes = [
  { path: 'cadastro', component: CadastroComponent }, 
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routesAuth)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
