import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestionPersonasService {
  urlBackend = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  addPersona(persona: any): Observable<any> {
    return this.http.post(`${this.urlBackend}/persona-controller/add-person`, {
      nombre: persona.nombre,
      apellido: persona.apellido,
      municipio: { id: persona.municipioId, municipio: persona.municipio },
      email: persona.email,
      telefono: persona.telefono,
      genero: persona.genero,
      dob: persona.dob,
      contraseña: persona.contraseña,
    });
  }
  getAllPersonas(): Observable<any> {
    return this.http.get(
      `${this.urlBackend}/persona-controller/get-all-persons`
    );
  }

  deletePersona(id: any): Observable<any> {
    return this.http.delete(
      `${this.urlBackend}/persona-controller/delete-person/${id}`
    );
  }
}
