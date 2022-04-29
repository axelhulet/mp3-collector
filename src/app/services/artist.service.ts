import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from '../models/Artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<Artist[]> {
    return this._http.get<Artist[]>(environment.api_url + "api/artists");
  }
}
