import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../_models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseURL = 'https://localhost:44330/site/Usuarios';

  constructor(private http: HttpClient) { }

  getAllUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseURL);
  }

  getUsuarioById(id: number): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL}/getById/${id}`);
  }

  postUsuario(usuario: Usuario){
    return this.http.post(`${this.baseURL}`, usuario);
  }

  putUsuario(usuario: Usuario){
    return this.http.put(`${this.baseURL}`, usuario);
  }

  deleteUsuario(usuario: Usuario){
    return this.http.delete(`${this.baseURL}/Delete/${usuario.id}`);
  }
}
