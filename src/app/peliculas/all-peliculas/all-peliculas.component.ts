import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Peliculas } from 'src/app/pelicula/peliculas';

declare var window: any;


@Component({
  selector: 'app-all-peliculas',
  templateUrl: './all-peliculas.component.html',
  styleUrls: ['./all-peliculas.component.css']
})
export class AllPeliculasComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  pelicula: Peliculas[] = [];
  deleteModal:any;
  itemToDelete:string = '';

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.getAll();
  }

  openDeletePopup(id:string){
  this.itemToDelete = id;
  this.deleteModal.show();
  }

  getAll() {
    this.peliculasService.get().subscribe((data) => {
      this.pelicula = data;
    })
  }

  delete(){
    this.peliculasService.delete(this.itemToDelete).subscribe(()=> {
      this.pelicula = this.pelicula.filter(_=>_._id !== this.itemToDelete);
      this.deleteModal.hide();
      this.deleteModal.dismissAll();

    })
  }

}
