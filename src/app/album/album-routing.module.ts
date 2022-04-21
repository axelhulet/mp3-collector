import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path : "", component : AlbumComponent, children : [
    { path: '', redirectTo: '/album/index', pathMatch: 'full' },
    { path : "index", component : IndexComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
