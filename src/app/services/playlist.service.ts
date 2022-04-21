import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Playlist } from '../models/Playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<Playlist[]> {
    return this._http.get<Playlist[]>(environment.api_url + "playlists?_expand=user");
  }
}
