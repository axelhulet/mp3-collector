;
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SongModule } from './song/song.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { PlaylistModule } from './playlist/playlist.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SongModule,
    ArtistModule,
    AlbumModule,
    PlaylistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
