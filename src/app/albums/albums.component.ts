import { Component, OnInit } from '@angular/core';
import { Ialbum } from '../interfaces/album';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Ialbum[];
  selectedAlbum: Ialbum ;
  base = 'http://localhost:8080/avaBavely/assets/';
  constructor(private connection: ApiService) { }
  ngOnInit() {
    this.connection.getAlbums().subscribe(
      albums => { this.albums = albums ;
      for (const album of albums) {
        album.imagePath = this.base + album.imagePath ;
      }}
    );
    this.connection.getSelctedAlbum().subscribe(
      album => { this.selectedAlbum = album; }
    );
  }

}
