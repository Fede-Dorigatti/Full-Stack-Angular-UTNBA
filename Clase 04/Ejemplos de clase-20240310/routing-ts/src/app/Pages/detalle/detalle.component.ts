import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetalle } from '../../Interfaces/Productos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
})
export class DetalleComponent {
  producto!: ProductoDetalle;
  loading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    this.init();
  }
  async init() {
    try {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.producto = await this.productosService.getById(id);
        this.loading = false;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
