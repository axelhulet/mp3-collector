import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<Album[]> {
    return this._http.get<Album[]>(environment.api_url + "albums?_expand=artist");
  }
}
