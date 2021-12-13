import { Component, OnInit } from '@angular/core';

export interface rolList {
  tipo: string;
  descripcion: string;
}

const ELEMENT_DATA: rolList[] = [
  {tipo: 'Esenciales', descripcion: 'Los cubren necesidades de atencion de salud prioritarias'},
  {tipo: 'Naturales', descripcion: 'En su composicion contiene principios activos de vegetales'},
  {tipo: 'Genericos', descripcion: 'Posse la misma concentracion y cuya patente haya caducidad'},
  {tipo: 'Vitales', descripcion: 'Indispensable para aliviar el sufrimiento de un paciente'},
];

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  displayedColumns: string[] = ['tipo','descripcion'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
