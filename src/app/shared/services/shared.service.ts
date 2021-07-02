import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user.model';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SharedService {


  readonly APIUrl="https://localhost:44302/api";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/user')
  }
  insertUser(user:User):any{
    console.log(this.APIUrl+'/user/add-user');

    // public unesiVanrednuSituaciju(situacija: Situacija): any {
    //   this.http.put<any>("http://localhost:5001/api/Situacijas", situacija)
    //     .subscribe(
    //       (response) => {
    //         console.log(response);
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    // }


     this.http.post<any>(this.APIUrl+'/user/add-user', user).subscribe((response)=> {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
          }
  viewUser(id:number):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/user' + id)
  }
}
