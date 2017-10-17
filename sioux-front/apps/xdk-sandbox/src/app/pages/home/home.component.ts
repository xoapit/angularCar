import { Component, OnInit } from '@angular/core';
import {ArticleService, UserResponse, Comment} from '../../core/services/article/article.service';
import {Observable} from "rxjs/Observable";
import {UserService} from "../../core/services/user/user.service";
import {User} from "../../models/user";
import {PetService} from "../../core/services/pet/pet.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserService]
})
export class HomeComponent implements OnInit {
  constructor(private articleService:ArticleService, private userService:UserService,
              private petService:PetService) {}

  someProperty = '';
  userResponse: Observable<UserResponse>;
  comments: Comment[]=[];
  pets=[];

  users: User[];
  ngOnInit() {

    this.someProperty = this.articleService.myData();
    this.getUsers();
    this.petService.getPets().subscribe(responsePets=>this.pets=responsePets);
  }

  getUsers():void{
    this.users=this.userService.getUsers();
  }


}
