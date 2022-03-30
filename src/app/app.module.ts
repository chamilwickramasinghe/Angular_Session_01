import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUpdateComponent } from './app-update/app-update.component';
import { AppAddComponent } from './app-add/app-add.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RestaurentComponent } from './restaurent/restaurent.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AppUpdateComponent,
    AppAddComponent,
    AppRegisterComponent,
    AppListComponent,
    AppLoginComponent,
    HomeComponent,
    RestaurentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
