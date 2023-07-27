 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation-module';
import { ALBUM_LISTS } from "../mock-albums"

@Component({
selector: 'app-album-details',
templateUrl: './album-details.component.html',
styleUrls: ['./album-details.component.css'],
animations: [fadeInAnimation]
})

export class AlbumDetailsComponent implements OnInit {
// Classe Input permet de récupérer les data de l'enfant
// album est liée à une entrée [album] du parent dans le sélecteur

@Input() album !: Album;
@Output() onPlay: EventEmitter<Album> = new EventEmitter()

songs: string[] | undefined = [];

// lists: List[] = ALBUM_LISTS;
tablAlbum: Array<String> | undefined ;

constructor(
  private albumService: AlbumService
) { }

ngOnInit(): void {
console.log(this.album); // pour l'instant c'est undefined ... C'est normal
}

ngOnChanges(): void {
  if (this.album) {
    this.songs = this.albumService.getAlbumList(this.album.id)?.list;
    console.log(this.songs);
    
    };
  }

  play(album: Album) {
    console.log("Jouer l'album", album.name);
    this.onPlay.emit(album);
    
  }

}

// ngOnChanges() : void {
//   if (this.album) {
//     this.songs = this.album.list.find(ele => ele.id === this.album.id)?.list;
// console.log(this.songs);

//   }
// }


