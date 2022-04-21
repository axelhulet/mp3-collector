import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path : "", component : ArtistComponent, children : [
    { path: '', redirectTo: '/artist/index', pathMatch: 'full' },
    { path : "index", component : IndexComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
