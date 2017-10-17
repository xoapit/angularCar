import { Injectable } from '@angular/core';
import {Http, Response, Headers, HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PetService{
  constructor(private http: Http){

  }
  private url:string ="https://jsonplaceholder.typicode.com/comments";
  getPets(){
    return this.http.get(this.url).map((res:Response)=>res.json());
  }

   addPet() {
     return this.http.post('http://jsonplaceholder.typicode.com/posts', {
       title: 'foo',
       body: 'bar',
       userId: 1
     })
       .subscribe(
         res => {
           console.log(res);
         },
         err => {
           console.log("Error occured");
         }
       );
   }
}
