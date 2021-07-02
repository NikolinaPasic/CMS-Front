import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';
import {User} from '../shared/user.model'
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  username:string 
  firstName:string 
  lastName:string  
  password:string
  role:string

  ngOnInit(): void {
    
  }
  user = new User();
  

  insert(){
    this.user.firstname = this.username;
    this.user.lastname = this.lastName;
    this.user.username = this.username;
    if(this.role=="admin")this.user.roleId = 1
    else this.user.roleId =2
    this.user.password = this.password

    console.log(this.user)

    this.sharedservice.insertUser(this.user)
    this.router.navigate(['/user']);
  }


  constructor(private sharedservice: SharedService, private http: HttpClient, private router:Router) {
    this.sharedservice.getUserList()
    .subscribe(list=>{
      // this.users=list;
      console.log(list);
    })
   }

}
