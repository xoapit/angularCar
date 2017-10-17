import { Component, OnInit } from '@angular/core';
import {ArticleService, UserResponse, Comment} from '../../core/services/article/article.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private articleService:ArticleService) {}
  someProperty = '';
  userResponse: Observable<UserResponse>;
  comments: Comment[]=[];
  ngOnInit() {
    console.log(this.articleService.cars);
    // console.log("Start"+this.articleService.getArticles()+"End");
    // this.userResponse= this.articleService.getInfo();
    // console.log(this.userResponse);
    this.someProperty = this.articleService.myData();
    this.articleService.getComments().subscribe((comments)=>{
      this.comments=comments;
      console.log('OK');
    });
    console.log("A");
    console.log(this.comments);
    console.log("B");

  }
}
