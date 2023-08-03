import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllPeliculasComponent } from './peliculas/all-peliculas/all-peliculas.component';
import {AddPeliculaComponent} from "./peliculas/add-pelicula/add-pelicula.component";
import {EditPeliculasComponent} from "./peliculas/edit-peliculas/edit-peliculas.component";

const routes: Routes = [{
  path: '',
  component: AllPeliculasComponent
},{
  path: 'add-movie',
  component: AddPeliculaComponent
},
  {
    path: 'edit-movie/:id',
    component: EditPeliculasComponent
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule { }
