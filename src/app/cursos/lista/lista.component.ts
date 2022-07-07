import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/core/models/cursos';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})

export class ListaComponent implements OnInit {
 
  cursos: Cursos[] = []
  index:number[]= []

  constructor(
    private cursosService: CursosService,
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.cursos
    for (let i = 0; i < this.cursos.length; i++) {
      this.index.push(i) 
    }
    
  }

}