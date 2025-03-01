import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import {
  Departament,
  DepartamentDetails,
  ResponseDepartaments,
} from '../Interfaces/departaments';
@Injectable({
  providedIn: 'root',
})
export class DepartamentsService {
  constructor(private http: HttpClient) {}
  getAll(): Promise<Departament[]> {
    return lastValueFrom(
      this.http
        .get<ResponseDepartaments>(
          'https://api.mercadolibre.com/sites/MLA/search?q=ipod'
        )
        .pipe(map((response: ResponseDepartaments) => response.results))
    );
  }
  getById(id: string): Promise<DepartamentDetails> {
    return lastValueFrom(
      this.http.get<DepartamentDetails>(`https://api.mercadolibre.com/items/${id}`)
    );
  }

  create(data: any): Observable<DepartamentDetails> {
    //Crear
    return this.http.post<DepartamentDetails>(
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