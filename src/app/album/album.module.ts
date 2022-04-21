import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AlbumComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
