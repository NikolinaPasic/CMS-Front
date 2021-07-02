import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:Array<any>=[];
  constructor(private sharedservice: SharedService, private http: HttpClient) {
    
   }

  ngOnInit(): void {
     this.sharedservice.getUserList()
    .subscribe(list=>{
      this.users=list;
      console.log(list);
    })
  }


}
