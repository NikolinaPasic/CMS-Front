import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import {HttpClient} from '@angular/common/http'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:Array<any>=[];
  constructor(private sharedservice: SharedService, private http: HttpClient,
    private router: Router) {
    
   }

  ngOnInit(): void {  
    this.sharedservice.getUserList()
    .subscribe(list=>{
      console.log(list);
      this.users=list;
    })
  }
  getUser(id:number){
    this.router.navigate(['/user/'+id]);
  }
  

  
}
