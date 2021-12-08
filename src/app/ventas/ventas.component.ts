import { Component, OnInit } from '@angular/core';

export interface ventaList {
  clave: number;
  descripcion: string;
  unidad: number;
  precio: number;
}

const ELEMENT_DATA: ventaList[] = [
  {clave: 1093, descripcion: 'Generico', unidad: 1, precio: 12},
  {clave: 1094, descripcion: 'Generico', unidad: 4, precio: 45},
  {clave: 1095, descripcion: 'Generico', unidad: 2, precio: 32},
  {clave: 1096, descripcion: 'Generico', unidad: 1, precio: 55},
  {clave: 1097, descripcion: 'Generico', unidad: 3, precio: 44},
  {clave: 1098, descripcion: 'Generico', unidad: 2, precio: 21},
];

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  displayedColumns: string[] = ['clave', 'descripcion', 'unidad', 'precio', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
