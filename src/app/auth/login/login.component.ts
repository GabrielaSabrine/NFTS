import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  senha: string = '';
  hide = true;
  user: User = {} as User



  constructor() { }
  onSubmit() {
    alert(`Bem-vindo(a) ${this.email}`);
  }
  ngOnInit(): void {
  }

}