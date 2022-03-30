import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAddComponent } from './app-add/app-add.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppUpdateComponent } from './app-update/app-update.component';
import { HomeComponent } from './home/home.component';
import { RestaurentComponent } from './restaurent/restaurent.component';

const routes: Routes = [
  {component : HomeComponent, path: ''},
  {component : AppAddComponent, path: 'add'},
  {component : AppLoginComponent, path: 'login'},
  {component : AppRegisterComponent, path: 'register'},
  {component : AppListComponent, path: 'list'},
  {component : AppUpdateComponent, path: 'update/:id'},
  {component : RestaurentComponent, path: 'restaurent'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
