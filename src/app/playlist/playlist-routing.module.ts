import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PlaylistComponent } from './playlist.component';

const routes: Routes = [
  { path : "", component : PlaylistComponent, children : [
    { path: '', redirectTo: '/playlist/index', pathMatch: 'full' },
    { path : "index", component : IndexComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
