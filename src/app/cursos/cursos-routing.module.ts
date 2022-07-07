import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicaoComponent } from './adicao/adicao.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: 'lista', component: ListaComponent },
  {path: 'adicao', component: AdicaoComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
