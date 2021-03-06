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
import { CatBaseComponent } from './cat-base/cat-base.component';
import { NotiVentaComponent } from './noti-venta/noti-venta.component';
import { NotiAnularComponent } from './noti-anular/noti-anular.component';
import { NotiIngresoComponent } from './noti-ingreso/noti-ingreso.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { RolUsuarioComponent } from './rol-usuario/rol-usuario.component';
import { AddRolComponent } from './add-rol/add-rol.component';
import { NotiRolComponent } from './noti-rol/noti-rol.component';
import { NotiAddUsuarioComponent } from './noti-add-usuario/noti-add-usuario.component';
import { CatUsuarioComponent } from './cat-usuario/cat-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { DecisionUserComponent } from './decision-user/decision-user.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { RegistroComponent } from './registro/registro.component';
import { NotiRegistroComponent } from './noti-registro/noti-registro.component';

const routes: Routes = [
  {
    path: '',
    component: DecisionUserComponent
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
  },
  {
    path: 'catbase',
    component: CatBaseComponent
  },
  {
    path: 'notiventa',
    component: NotiVentaComponent
  },
  {
    path: 'notianular',
    component: NotiAnularComponent
  },
  {
    path: 'notiingreso',
    component: NotiIngresoComponent
  },
  {
    path: 'gestionusuario',
    component: GestionUsuarioComponent
  },
  {
    path: 'rolusuario',
    component: RolUsuarioComponent
  },
  {
    path: 'addrol',
    component: AddRolComponent
  },
  {
    path: 'notirol',
    component: NotiRolComponent
  },
  {
    path: 'notiaddusuario',
    component: NotiAddUsuarioComponent
  },
  {
    path: 'catusuario',
    component: CatUsuarioComponent
  },
  {
    path: 'addusuario',
    component: AddUsuarioComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'notiregistro',
    component: NotiRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
