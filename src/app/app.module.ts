import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardsModule } from 'angular-bootstrap-md';
import { AvatarModule } from 'ngx-avatar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserAddComponent } from './user-add/user-add.component'
import { FormsModule } from '@angular/forms';
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
    MatCardModule,
    FlexLayoutModule,
    CardsModule,
    AvatarModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
