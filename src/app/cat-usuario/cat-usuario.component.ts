import { Component, OnInit } from '@angular/core';

export interface ventaList {
  rol: string;
  id: string;
  nombre: string;
  correo: string;
  direccion: string;
}

const ELEMENT_DATA: ventaList[] = [
  {rol: 'administrador', id: 'A001', nombre: 'rodolfo ruiz', correo:'Admi@gmail.com', direccion: 'Norte 3'},
  {rol: 'vendedor', id: 'V001', nombre: 'jose martinez', correo:'vende01@gmail.com', direccion: 'Oriente 2'},
  {rol: 'administrador', id: 'A002', nombre: 'maria lourdez', correo:'Admi02@gmail.com', direccion: 'Sur 7'},
  {rol: 'vendedor', id: 'V002', nombre: 'citlalli sanchez', correo:'Vende02@gmail.com', direccion: 'Oriente'},
  {rol: 'administrador', id: 'A003', nombre: 'angel baez', correo:'Admi03@gmail.com', direccion: 'Norte 18'},
];

@Component({
  selector: 'app-cat-usuario',
  templateUrl: './cat-usuario.component.html',
  styleUrls: ['./cat-usuario.component.css']
})
export class CatUsuarioComponent implements OnInit {
  displayedColumns: string[] = ['rol', 'id', 'nombre', 'correo','direccion', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
