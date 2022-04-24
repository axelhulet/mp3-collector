import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { SongComponent } from './song.component';

const routes: Routes = [
  { path : "", component : SongComponent, children : [
    { path: '', redirectTo: '/song/index', pathMatch: 'full' },
    { path : "index", component : IndexComponent},
    { path : "add", component : AddComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
