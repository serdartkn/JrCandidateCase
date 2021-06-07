import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44326/api/';
  constructor(private httpClient: HttpClient) { }

  getUserDetails(): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + 'Users/getuserdetails';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }





}
