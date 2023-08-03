import {Component, OnInit} from '@angular/core';
import {PeliculasService} from "../peliculas.service";
import {Router} from "@angular/router";
import { CreateUpdate } from "../create-update";

@Component({
  selector: 'app-add-pelicula',
  templateUrl: './add-pelicula.component.html',
  styleUrls: ['./add-pelicula.component.css']
})
export class AddPeliculaComponent implements OnInit {
  constructor(private peliculasService: PeliculasService, private router: Router) {  }

    peliculas: CreateUpdate = {
      nombre: '',
      poder: '',
      productora: '',
      imageUrl: '',
      sinopsis: '',
      observacion: ''
    };

  ngOnInit(): void {}

  create(){
    this.peliculasService.create(this.peliculas).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
