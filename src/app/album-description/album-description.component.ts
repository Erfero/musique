import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation-module';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations: [fadeInAnimation]
})

export class AlbumDescriptionComponent implements OnInit {


  album: Album | undefined;
  constructor(
    private route: ActivatedRoute, // récupérez le service route
    private aS: AlbumService // récupérez le service
  ) { }

  ngOnInit(): void {
    console.log(this.route);
    
    
    // permet de récupérer l'identifiant
    // const id: string = this.route.snapshot.params["albumid"];
    const id = this.route.snapshot.params[("id")];
    // TODO récupérez le détail d'un album
      this.album = this.aS.getAlbum(id);
      console.log(this.album); 

    }
  }