import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AllPeliculasComponent } from './peliculas/all-peliculas/all-peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPeliculaComponent } from './peliculas/add-pelicula/add-pelicula.component';
import { FormsModule } from "@angular/forms";
import { EditPeliculasComponent } from './peliculas/edit-peliculas/edit-peliculas.component';


@NgModule({
  declarations: [
    AppComponent,
    AllPeliculasComponent,
    AddPeliculaComponent,
    EditPeliculasComponent
  ],
  imports: [
    BrowserModule,

    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
