import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { TitleService } from '@sioux-front/services/TitleService';
import { TranslatorService } from '@sioux-front/services/TranslatorService';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private tsServ: TranslatorService,
    private router: Router,
    private titleSrv: TitleService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.router.events
      .filter(evt => evt instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => {
        let t = event['translate'];
        if (t) {
          t = this.tsServ.fanyi(t);
        } else {
          t = event['title'];
        }
        this.titleSrv.setTitle(t);
      });

    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }
}
