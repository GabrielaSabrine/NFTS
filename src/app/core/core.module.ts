import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LouderComponent } from './louder/louder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    LouderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    MatIconModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
   
  exports: [NavbarComponent]
})
export class CoreModule {

 }
