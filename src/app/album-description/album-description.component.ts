import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css']
})

export class AlbumDescriptionComponent implements OnInit {

  songs: string[] | undefined = [];

  album: Album | undefined;
  constructor(
    private route: ActivatedRoute, // récupérez le service route
    private aS: AlbumService // récupérez le service
  ) { }

  ngOnInit(): void {
    // permet de récupérer l'identifiant
    const id = this.route.snapshot.paramMap.get('id');
    // TODO récupérez le détail d'un album
    if (this.album) {
      this.songs = this.aS.getAlbumList(this.album.id)?.list;
      console.log(this.songs);

    }
  }
}