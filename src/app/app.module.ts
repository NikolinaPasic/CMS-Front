import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { UserAddComponent } from './user-add/user-add.component'
import { FormsModule } from '@angular/forms';
import { UserViewComponent } from './user-view/user-view.component'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAddComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
