import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Song } from '../models/Song';
import { Filemp3 } from '../models/Filemp3';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<Song[]> {
    return this._http.get<Song[]>(environment.api_url + "api/songs");
  }

  addSong(filemp3 : Filemp3) : Observable<Filemp3>
  {
    return this._http.post<Filemp3>(environment.api_url + "api/song" , filemp3);
  }
} 
