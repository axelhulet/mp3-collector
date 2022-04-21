import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { SongComponent } from './song.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    SongComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    SongRoutingModule
  ]
})
export class SongModule { }
