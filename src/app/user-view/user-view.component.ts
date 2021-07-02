import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  ngOnInit(): void {
  }

  // users:Array<any>=[];
  // constructor(private sharedservice: SharedService, private http: HttpClient) {
  //   this.sharedservice.viewUserList()
  //   .subscribe(list=>{
  //     console.log(list);
  //     this.users=list;
  //   })
  //  }
}
