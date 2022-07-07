import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos: Cursos[] = [
    { id: 1,
      nome: 'Como criar e vender NFTs',
      imagem: 'https://i0.wp.com/nosnerds.com.br/wp-content/uploads/2022/02/metaverseacademy-02.jpg?resize=535%2C300&ssl=1',
      curso: 'NFTs',
      duracao: '1 ano',
      descricao: 'Como criar e vender NFTs pela BlockChain',
      valor: 5000,
      emPromocao: false,
    valorComDesconto: 2000,
    desconto: 0,
    },

    { id:2,
      nome: 'NFTS e Metalaw',
      imagem: 'https://uploads-ssl.webflow.com/60edf18d3ac157717348b597/61bb7813d5712ec9a456aff1_(760x420x)-metalaw%20(1).jpg',
      curso: 'NFTS e Metalaw',
      duracao: '2 anos',
      descricao: 'Curso completo de NFTs e Metalaw, intersseção do jurídico no Digital',
      valor: 7000,
      emPromocao: true,
      valorComDesconto: 5000,
      desconto: 300,
    },
    
  ]

  getCursos(): Cursos[] {
    return this.cursos;
  }

  addCursos(cursos: Cursos) {
    this.cursos.push(cursos);
  }

  deleteCursos(cursos: Cursos) {
    this.cursos.splice(-1, 1);
  }

  constructor() { }
}