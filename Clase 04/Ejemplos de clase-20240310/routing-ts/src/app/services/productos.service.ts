import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import {
  Producto,
  ProductoDetalle,
  ResponseProductos,
} from '../Interfaces/Productos';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}
  getAll(): Promise<Producto[]> {
    return lastValueFrom(
      this.http
        .get<ResponseProductos>(
          'https://api.mercadolibre.com/sites/MLA/search?q=ipod'
        )
        .pipe(map((response: ResponseProductos) => response.results))
    );
  }
  getById(id: string): Promise<ProductoDetalle> {
    return lastValueFrom(
      this.http.get<ProductoDetalle>(`https://api.mercadolibre.com/items/${id}`)
    );
  }

  create(data: any): Observable<ProductoDetalle> {
    //Crear
    return this.http.post<ProductoDetalle>(
      'https://api.mercadolibre.com/sites/MLA/search?q=ipod',
      data
    );
  }
  update(id: string, data: any) {
    //Crear
    return this.http.put(
      `https://api.mercadolibre.com/sites/MLA/search?q=ipod${id}`,
      data
    );
  }
  delete(id: string) {
    //Crear
    return this.http.delete(
      `https://api.mercadolibre.com/sites/MLA/search?q=ipod${id}`
    );
  }
}
