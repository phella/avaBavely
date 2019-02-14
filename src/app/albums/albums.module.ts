import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AlbumsComponent } from './albums.component';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'albums', component: AlbumsComponent},
    ])
  ]
})
export class AlbumsModule { }
