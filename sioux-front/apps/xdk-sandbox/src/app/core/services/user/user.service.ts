import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {User} from '../../../models/user';
import {USERS} from '../mock/mode-user';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  private url = "http://foodapi4demo.azurewebsites.net/api/foods";
  private url2 = "https://api.github.com/users/seeschweiler";
  private urlComments = "https://jsonplaceholder.typicode.com/comments";

  getUsers():User[] {
    return USERS;
  }
}
