import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../shared/material/material.module';
import { AuthModule } from '../auth/auth.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AdicaoComponent } from './adicao/adicao.component';
import { WrapPipe } from '../shared/pipe/wrap/wrap.pipe';
import { PercentagePipe } from '../shared/pipe/percentage/percentage.pipe';


@NgModule({
  declarations: [
    ListaComponent,
    AdicaoComponent,
    PercentagePipe,
    WrapPipe,
  ],

  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    AuthRoutingModule,
    MaterialModule,
    AuthModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  
})
export class CursosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
