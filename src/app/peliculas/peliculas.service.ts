import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Peliculas } from '../pelicula/peliculas';
import {CreateUpdate} from "./create-update";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Peliculas[]>('http://localhost:3000/peliculas/listarPeliculas');
  }
  create(pelicula:CreateUpdate){
    return this.http.post('http://localhost:3000/peliculas/createMovie', pelicula);
  }

  getById(id:string){
    return this.http.get<Peliculas>(`http://localhost:3000/peliculas/${id}`);
  }
  update(id: string, pelicula: CreateUpdate){
    return this.http.put(`http://localhost:3000/peliculas/${id}`, pelicula);
  }

  delete(id:string){
    return this.http.delete(`http://localhost:3000/peliculas/${id}`);

  }

}
