import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  albumList : Album[] = [];


  constructor(private _albumService : AlbumService) { }

  ngOnInit(): void {
    this._albumService.getAll().subscribe(
      data => this.albumList = data
    );
  }

}
