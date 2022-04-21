import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  connectedUser! : User;
  username! : string;
  password! : string;

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
  }
 /*  seConnecterUser() : void {
    this.connectedUser = this._userService.connectUser(this.username);
  }

  seDeconnecterUser() : void {
    this.connectedUser = this._userService.disconnectUser();
  }
 */
}
