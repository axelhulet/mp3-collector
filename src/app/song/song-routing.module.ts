import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SongComponent } from './song.component';

const routes: Routes = [
  { path : "", component : SongComponent, children : [
    { path: '', redirectTo: '/song/index', pathMatch: 'full' },
    { path : "index", component : IndexComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
