
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; // module des routes et classe de Typage
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';

// définission de la constante pour les routes

const albumsRoutes: Routes = [
  {
  path: 'albums',
  component: AlbumsComponent
  },
  {
  path: '',
  redirectTo: '/albums',
  pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'album/:id',
  component: AlbumDescriptionComponent
  },
  {
    path:"oc",
    component: OpenCloseComponent
  },
 
 
  // Attention à la page notfounfd
  {
    path: "**", component: PageNotFoundComponent
  }
  ];
  

@NgModule({

declarations: [
AppComponent,
AlbumsComponent,
AlbumDetailsComponent,
SearchComponent,
LoginComponent,
AlbumDescriptionComponent,
PageNotFoundComponent,
OpenCloseComponent,
BrowserAnimationsModule
],

imports: [
BrowserModule,
FormsModule,
RouterModule.forRoot(albumsRoutes), // chargement des routes dans l'application
BrowserAnimationsModule,
],

providers: [],
bootstrap: [AppComponent]
})


export class AppModule { }
  