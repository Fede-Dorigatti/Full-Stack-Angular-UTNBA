import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../Interfaces/Productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productos: Promise<Producto[]>;
  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.getAll();
  }
}
