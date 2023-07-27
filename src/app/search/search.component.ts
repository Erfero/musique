import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumService } from "../album.service";
import { Album } from "../album";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
word: string = '';

  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter();

  constructor(
    private albumService: AlbumService
  ) { }

  onSubmit(form: NgForm): void {
    let results: Album[] = this.albumService.search(form.value.word);
    this.searchAlbums.emit(results);
    
    
  }

  onChangeEmit($event: string)  {
    console.log("word à changé. Nouvelle valeur= ", $event);
    
  }
}
