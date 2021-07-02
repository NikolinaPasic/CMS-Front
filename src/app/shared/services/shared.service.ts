import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
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

  viewUser(id:number):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/user' + id)
  }
}
