import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';


const routes: Routes =[
  {path: 'users', component: UserComponent}
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
