import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import {
  Users
} from '../Interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
 

  create(data: any): Observable<Users> {
    //Crear
    return this.http.post<Users>(
      'http://localhost:3000/users/login',
      data
    );
  }
}