import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PageVendedorComponent } from './page-vendedor/page-vendedor.component';
import { CatProductosComponent } from './cat-productos/cat-productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { LoginComponent } from './login/login.component';
import { CambioPassComponent } from './cambio-pass/cambio-pass.component';
import { NotiPassComponent } from './noti-pass/noti-pass.component';
import { IngresosDiariosComponent } from './ingresos-diarios/ingresos-diarios.component';
import { PageAdministradorComponent } from './page-administrador/page-administrador.component';
import { AddIngresoComponent } from './add-ingreso/add-ingreso.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cambiopass',
    component: CambioPassComponent
  },
  {
    path: 'notipass',
    component: NotiPassComponent
  },
  {
    path: 'pagevendedor',
    component: PageVendedorComponent
  },
  {
    path: 'catproductos',
    component: CatProductosComponent
  },
  {
    path: 'ventas',
    component: VentasComponent
  },
  {
    path: 'ingresosdiarios',
    component: IngresosDiariosComponent
  },
  {
    path: 'pageadministrador',
    component: PageAdministradorComponent
  },
  {
    path: 'addingreso',
    component: AddIngresoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }