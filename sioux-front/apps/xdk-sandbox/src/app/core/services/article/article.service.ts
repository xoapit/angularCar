import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ArticleService {
  constructor(private http: Http) {}
  private url="http://foodapi4demo.azurewebsites.net/api/foods";
  private url2="https://api.github.com/users/seeschweiler";
  private urlComments="https://jsonplaceholder.typicode.com/comments";

  data: any={};

  cars = [
    'Ford','Chevrolet','Buick'
  ];


  myData() {
    return 'This is my data, man!';
  }

  getArticles(){
    return this.http.get(this.url).map(res=>res.json());
  }

  getInfo(){
    return this.http.get(this.url).map(res=><UserResponse>res.json());
  }


  getComments(): Observable<Comment[]>{
    return this.http.get(this.urlComments).map(res=>{
      const comments= res.json();
      return comments.map((comment)=>new Comment(comment));
    })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  getAllComments(): Observable<Comment[]> {
    return this.getComments();
  }

  getData(){
  }
}

export class UserResponse {
  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }
  public get bio(): string {
    return this._bio;
  }

  public set bio(value: string) {
    this._bio = value;
  }
  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }
  private _login: string;
  private _bio: string;
  private _company: string;
}
export class Comment{
  postId:number;
  id:number;
  name:string;
  email:string;
  body:string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

