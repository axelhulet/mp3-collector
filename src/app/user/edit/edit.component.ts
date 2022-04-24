import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  registerForm! : FormGroup;

  constructor(private _fb : FormBuilder, private _userService : UserService) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      username: [null, [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      password : [null, [Validators.required]],
      confirmPassword : [null, [Validators.required]],
    },
    {validator : this.checkPassword}
    );
  }
  register(){
    if(this.registerForm.valid)
    {
      let userToAdd : User = {...this.registerForm.value, active : true};
      this._userService.addUser(userToAdd).subscribe();

    }else{
      this.registerForm.markAllAsTouched();
    }
  }
  
  checkPassword(c : FormGroup) {
    if(c.get('password')?.value !== '' && c.get('confirmPassword')?.value !== ''){
      if(c.get('password')?.value !== c.get('confirmPassword')?.value){
        return { notsamepassword : true}
      }
      else return null;
  
    }
    return null;
  }
}
