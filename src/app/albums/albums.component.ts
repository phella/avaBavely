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
  constructor(private connection: ApiService) { }
  ngOnInit() {
    this.connection.getAlbums().subscribe(
      albums => { this.albums = albums ; }
    );
  }

}
