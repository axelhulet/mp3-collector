import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Song } from '../models/Song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<Song[]> {
    return this._http.get<Song[]>(environment.api_url + "songs?_expand=artist&_expand=album&_expand=genre");
  }
}
