import { Component, OnInit } from '@angular/core';
// importez la définition de la classe et des albums

import { Album, List } from "../album";
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation-module';
import { ALBUMS, ALBUM_LISTS } from "../mock-albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {
  [x: string]: any;

  titlePage: string = "Page princiaple Albums Music";
  albums: Album[] | undefined = undefined;
  lists: List[] = [];
  selectedAlbum! : Album;
  status: string | null = null

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit() : void { 
    this.albums = this.albumService
                              .order(function(a: Album, b: Album) {
                                    return a.duration - b.duration
                                  })
                              .limit(0, 10)
                              .getAlbums()
   
  }
  
    
  // ngOnInit(): void {

  // }

  onSelect(newAlbum: Album) {
    this.selectedAlbum = newAlbum;
  }

  playParent($event: Album) {
   this.status = $event.id ;
  }
  
  search($event: Album[]) {
    console.log(`Parent sera mis à jour et affichera seulement les albums ${$event}`);
    if ($event) {
      this.albums = $event;
    }
    

  }
  
}


