import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';


const routes: Routes =[
  {path: 'user', component: UserComponent},
  {path: 'user-add', component: UserAddComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
