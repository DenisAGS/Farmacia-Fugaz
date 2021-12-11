import { Component, OnInit } from '@angular/core';

export interface rolList {
  rol: string;
  id: string;
}

const ELEMENT_DATA: rolList[] = [
  {rol: 'Vendedor', id: 'V001'},
  {rol: 'Administrador', id: 'A001'},
];

@Component({
  selector: 'app-rol-usuario',
  templateUrl: './rol-usuario.component.html',
  styleUrls: ['./rol-usuario.component.css']
})
export class RolUsuarioComponent implements OnInit {
  displayedColumns: string[] = ['rol','id'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
