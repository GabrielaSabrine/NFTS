import { Component, OnInit } from '@angular/core';

interface MenuItem {
  link: string;
  label: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itensMenu: MenuItem[] = [
    {
      link: '/home',
      label: 'Página inicial',
    },
    {
      link: '/chamados',
      label: 'Chamados',

    },
    {
      link: '/clientes',
      label: 'Clientes',

    },
    {
      link: '/tecnicos',
      label: 'Técnicos',

    },
    {
      link: '/manual-do-software',
      label: 'Manual do Software',

    }]

}
