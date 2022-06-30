import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MatIconModule,
    MaterialModule,
    
  ]
})
export class CursosModule { }
