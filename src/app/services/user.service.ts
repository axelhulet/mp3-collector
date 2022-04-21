import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getAll() : Observable<User[]> {
    return this._http.get<User[]>(environment.api_url + "users");
  }

  addUser(user : User) : Observable<User>
  {
    return this._http.post<User>(environment.api_url + "users" , user);
  }

  connectUser(username : string) : Observable<User> {
    return this._http.get<User>(environment.api_url + "users" + username); 
  }

  disconnectUser() : undefined {
    return undefined;
  }
  deleteUser(id : number) : Observable<User>{
    return this._http.delete<User>(environment.api_url + "users/" + id)
  }
}
