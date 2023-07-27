import { Injectable } from '@angular/core';
import { Album, List, SortAlbumCallback } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private _albums: Album[] = ALBUMS;

  private _albumsList: List[] = ALBUM_LISTS;

  constructor() { }

  getAlbums(): Album[] {
    return this._albums;
  }

  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id);
  }
  getAlbumList(id: string): List | undefined {
    return this._albumsList.find(list => list.id === id);
  }
  count() {
    return this._albums.length;
  }
  paginate(start: number, end: number): Album[] {
    return this._albums.slice(start, end).sort((a: Album, b: Album) => b.duration - a.duration);
  }

  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort(callback);
    return this;

  }

  limit(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end);
    return this;
  }

  search(word: string): Album[] {
    return this._albums
      .filter(album => {
        return album.title
          .toLowerCase()
          .includes(word.trim().toLowerCase());
      });
  }

  searchV2(word: string): Album[] {
    let re = new RegExp(word.trim(), "g")
    return this._albums.filter(album => album.title.match(re));
  }
}
