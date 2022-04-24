import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'user',  loadChildren : () => import("./user/user.module").then(m => m.UserModule)},
  { path : 'song',  loadChildren : () => import("./song/song.module").then(m => m.SongModule)},
  { path : 'artist',  loadChildren : () => import("./artist/artist.module").then(m => m.ArtistModule)},
  { path : 'album',  loadChildren : () => import("./album/album.module").then(m => m.AlbumModule)},
  { path : 'playlist',  loadChildren : () => import("./playlist/playlist.module").then(m => m.PlaylistModule)},
  {path : 'files', redirectTo : '/files', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
