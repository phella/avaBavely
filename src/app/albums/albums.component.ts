import { Component, OnInit } from '@angular/core';
import { Ialbum } from '../interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Ialbum[];
  selectedAlbum: Ialbum ;
  constructor() { }

  ngOnInit() {
  }

}
