import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PeliculasService} from "../peliculas.service";
import {CreateUpdate} from "../create-update";

@Component({
  selector: 'app-edit-peliculas',
  templateUrl: './edit-peliculas.component.html',
  styleUrls: ['./edit-peliculas.component.css']
})
export class EditPeliculasComponent implements  OnInit{

  constructor(private route: ActivatedRoute,
              private peliculasService: PeliculasService, private router: Router ) {}


  itemId: string = '';

  peliculas: CreateUpdate = {
    nombre: '',
    poder: '',
    productora: '',
    imageUrl: '',
    sinopsis: '',
    observacion: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get('id') ?? '';
      this.getById();
    })
  }

  getById(){
    this.peliculasService.getById(this.itemId)
      .subscribe((data)=> {
        this.peliculas.nombre = data.nombre;
        this.peliculas.poder = data.poder;
        this.peliculas.productora = data.productora;
        this.peliculas.sinopsis = data.sinopsis;
        this.peliculas.imageUrl = data.imageUrl;
        this.peliculas.observacion = data.observacion
      });
  }
  update(){
    this.peliculasService.update(this.itemId, this.peliculas)
      .subscribe(() => {
  this.router.navigate((['/']));
    })
  }
}
