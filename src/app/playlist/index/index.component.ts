import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  playlistList : Playlist[] = [];

  constructor(private _playlistService : PlaylistService) { }

  ngOnInit(): void {
    this._playlistService.getAll().subscribe(
      data => this.playlistList = data
    );
  }

}
