import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path : "", component : UserComponent, children : [
    { path: '', redirectTo: '/user/index', pathMatch: 'full' },
    { path : "index", component : IndexComponent},
    { path : "register", component : RegisterComponent},
    { path : "login", component : LoginComponent},
    { path : "edit/:id", component : EditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
