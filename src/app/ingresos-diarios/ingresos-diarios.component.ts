import { Component, OnInit } from '@angular/core';

export interface ingresosList {
  idingreso: number;
  fecha: string;
  monto: number;
  descripcion: string;
}

const ELEMENT_DATA: ingresosList[] = [
  {idingreso: 1, fecha: '30.08.21', monto: 1200, descripcion: 'paracetamol, generico'},
  {idingreso: 2, fecha: '01.09.21', monto: 1300, descripcion: 'cabergolina, vital'},
  {idingreso: 3, fecha: '02.09.21', monto: 1100, descripcion: 'diclofenaco, vital'},
  {idingreso: 4, fecha: '03.09.21', monto: 1458, descripcion: 'paracetamol, vital'},
  {idingreso: 5, fecha: '04.09.21', monto: 1250, descripcion: 'paracetamol, natural'},
  {idingreso: 6, fecha: '05.09.21', monto: 1290, descripcion: 'diclofenaco, generico'},
  {idingreso: 7, fecha: '06.09.21', monto: 2200, descripcion: 'metformina, generico'},
  {idingreso: 8, fecha: '07.09.21', monto: 1900, descripcion: 'cabergolina, generico'},

];

@Component({
  selector: 'app-ingresos-diarios',
  templateUrl: './ingresos-diarios.component.html',
  styleUrls: ['./ingresos-diarios.component.css']
})
export class IngresosDiariosComponent implements OnInit {
  displayedColumns: string[] = ['idingreso', 'fecha', 'monto', 'descripcion'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
