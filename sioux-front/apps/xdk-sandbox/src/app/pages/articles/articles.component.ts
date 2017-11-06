import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  Title = 'Angular';
  Title2 = 'Angular';

  courses: any=[
    {
      "name": "MyCourse",
      "description": "MyCourse",
      "status": "Available",
      "modules": [],
      "assignments": [],
      "students": [
        {
          "user": {
            "login": "Student",
            "email": "siouxsmarteducation1@gmail.com",
            "familyName": "Tom",
            "givenName": "Hank",
            "gender": "Male",
            "role": "Student",
            "id": "c2889fc5-599a-48ef-94ba-9500a3cfd4ab"
          },
          "id": "12c7409b-a037-46e4-9a9d-9d61ec60937f"
        }
      ],
      "id": "12c7409b-a037-46e4-9a9d-9d6aec60937f"
    },
    {
      "name": "MyCourse2",
      "description": "MyCourse2",
      "status": "Available",
      "modules": [],
      "assignments": [],
      "students": [
        {
          "user": {
            "login": "Student2",
            "email": "siouxsmarteducation1@gmail.com",
            "familyName": "Tom2",
            "givenName": "Hank2",
            "gender": "Male",
            "role": "Student",
            "id": "c2889fc5-599a-48ef-94ba-9500a3cfd4ab"
          },
          "id": "12c7409b-a037-46e4-9a9d-9d61ec60937f"
        }
      ],
      "id": "12c7409b-a037-46e4-9a9d-9d6aec60937f"
    }
  ];

  myCourse: Course;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=>{
       const date = params['date'];
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

  }
}

export class Course{
  name: string;
  description: string;
  status: string;
  id:string;
}
