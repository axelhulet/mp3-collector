import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg! : FormGroup;

  constructor(private _userService : UserService, private session: SessionService, private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  submit() {
    if(this.fg.invalid) 
      return;
    this._userService.login(this.fg.value).subscribe({
      next: (auth) => {
        this.session.save(auth.token);
        this.router.navigateByUrl('/user/index');
      },
      error: () => {
        console.log('Bad credentials');
      }
    })
  }

}
