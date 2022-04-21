import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  userList : User[] = [];

  constructor(private _userService : UserService, private _route : Router) { }

  ngOnInit(): void {
    this._userService.getAll().subscribe(
      data => this.userList = data
    );
  }

  deleteUser(id : number){
    this._userService.deleteUser(id).subscribe(
      response =>
      {
        this._route.routeReuseStrategy.shouldReuseRoute = () => false;
        this._route.onSameUrlNavigation = 'reload';
        this._route.navigateByUrl("/user/index");
      }
    );
  }
}
