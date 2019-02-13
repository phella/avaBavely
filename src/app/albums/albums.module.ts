import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { VideosComponent } from '../videos/videos.component';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'videos', component: VideosComponent},
      {path: 'albums', component: AlbumsComponent}
    ])
  ]
})
export class AlbumsModule { }
