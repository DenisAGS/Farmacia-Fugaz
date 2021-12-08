import { Component } from '@angular/core';
import { CatProductosComponent } from './cat-productos/cat-productos.component';
import { PageVendedorComponent } from './page-vendedor/page-vendedor.component';
import { VentasComponent } from './ventas/ventas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmacia';
}
