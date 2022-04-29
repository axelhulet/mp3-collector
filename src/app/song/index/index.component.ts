import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/Song';
import { SongService } from 'src/app/services/song.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  songList : Song[] = [];

  constructor(private _songService : SongService) { }

  ngOnInit(): void {
    this._songService.getAll().subscribe(
      data => this.songList = data
    );
    console.log(this.songList);

  }
}
