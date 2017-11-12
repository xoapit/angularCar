import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  Title = 'Angular';
  Title2 = '123';

  courses: Course[]=[
    {
      "name": "MyCourse",
      "description": "MyCourse",
      "status": "Available",
      "id": "12c7409b-a037-46e4-9a9d-9d6aec60937f"
    },
    {
      "name": "MyCourse2",
      "description": "MyCourse2",
      "status": "Available",
      "id": "12c7409b-a037-46e4-9a9d-9d6aec60937f"
    }
  ];

  myCourse: Course;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=>{
       const date = params['id'];
       this.myCourse= new Course();
       this.Title2=date;
    });
  }

  // constructor(){}

  ngOnInit() {
    this.myCourse= new Course();
    // this.myCourse.name='English';
    // this.myCourse.description='English description';
    // this.myCourse.status='Available';
  }

  createCourse(Course){
    this.myCourse.status='Available';
    const course={
      "name": "MyCourse2",
      "description": "MyCourse2",
      "status": "Available",
      "id": "12c7409b-a037-46e4-9a9d-9d6aec60937f"
    };
    this.courses.push(course);

  }
}

export class Course{
  name: string;
  description: string;
  status: string;
  id:string;
}
