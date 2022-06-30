import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  hide = true;
  user: User = {} as User;

  imagem = 'https://images.news18.com/ibnlive/uploads/2021/12/nft-1-16399722744x3.png'
  
  constructor(private fb: FormBuilder, private toast: HotToastService) {}

  onSubmit() {
    this.toast.success('Cadastro Realizado');
  }

  ngOnInit(): void {}
}
