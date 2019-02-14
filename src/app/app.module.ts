import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { AlbumsModule } from './albums/albums.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]),
    AlbumsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
