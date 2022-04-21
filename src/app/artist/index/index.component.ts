import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  artistList : Artist[] = [];


  constructor(private _artistService : ArtistService) { }

  ngOnInit(): void {
    this._artistService.getAll().subscribe(
      data => this.artistList = data
    );
  }

}
