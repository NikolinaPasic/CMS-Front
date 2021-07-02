import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { UserViewComponent } from './user-view/user-view.component';


const routes: Routes =[
  {path: 'user', component: UserComponent},
  {path: 'user/:id',component:UserViewComponent}
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
