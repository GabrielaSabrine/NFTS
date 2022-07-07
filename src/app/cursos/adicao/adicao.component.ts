import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/core/models/cursos';
import { CursosService } from 'src/app/core/services/cursos.service';


@Component({
  selector: 'app-adicao',
  templateUrl: './adicao.component.html',
  styleUrls: ['./adicao.component.css']
})
export class AdicaoComponent implements OnInit {
  cursos: Cursos = {} as Cursos
 
  constructor(  private cursosService: CursosService
  ) {}

  onSubmit() {
    alert(`Cursos ${this.cursos.nome} criado!`);
    this.cursosService.addCursos(this.cursos)
  }

  ngOnInit(): void {
    this.cursos.id=this.cursosService.cursos.length
  }
}