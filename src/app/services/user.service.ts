import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { Auth } from '../models/auth.model';

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
    return this._http.post<User>(environment.api_url + "api/user" , user);
  }
  deleteUser(id : number) : Observable<User>{
    return this._http.delete<User>(environment.api_url + "users/" + id)
  }

  public login(form: Login) : Observable<Auth> {
    return this._http.post<Auth>('http://localhost:8000/api/login_check', form);
  }
}

