import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Interfaz del sistema
import { VentasComponent } from './ventas/ventas.component';
import { PageVendedorComponent } from './page-vendedor/page-vendedor.component';
import { CatProductosComponent } from './cat-productos/cat-productos.component';
import { LoginComponent } from './login/login.component';
import { CambioPassComponent } from './cambio-pass/cambio-pass.component';
import { NotiPassComponent } from './noti-pass/noti-pass.component';
import { IngresosDiariosComponent } from './ingresos-diarios/ingresos-diarios.component';
import { PageAdministradorComponent } from './page-administrador/page-administrador.component';

// Angular material
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddIngresoComponent } from './add-ingreso/add-ingreso.component';
import { CatBaseComponent } from './cat-base/cat-base.component';
import { NotiVentaComponent } from './noti-venta/noti-venta.component';
import { NotiAnularComponent } from './noti-anular/noti-anular.component';
import { NotiIngresoComponent } from './noti-ingreso/noti-ingreso.component';
import { RouterModule } from '@angular/router';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { RolUsuarioComponent } from './rol-usuario/rol-usuario.component';
import { AddRolComponent } from './add-rol/add-rol.component';
import { NotiRolComponent } from './noti-rol/noti-rol.component';
import { NotiAddUsuarioComponent } from './noti-add-usuario/noti-add-usuario.component';
import { CatUsuarioComponent } from './cat-usuario/cat-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    PageVendedorComponent,
    CatProductosComponent,
    LoginComponent,
    CambioPassComponent,
    NotiPassComponent,
    IngresosDiariosComponent,
    PageAdministradorComponent,
    AddIngresoComponent,
    CatBaseComponent,
    NotiVentaComponent,
    NotiAnularComponent,
    NotiIngresoComponent,
    GestionUsuarioComponent,
    RolUsuarioComponent,
    AddRolComponent,
    NotiRolComponent,
    NotiAddUsuarioComponent,
    CatUsuarioComponent,
    AddUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ScrollingModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
