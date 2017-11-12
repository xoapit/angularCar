import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from '../../core/services/news.service';
import 'rxjs/add/operator/switchMap';
import { Article } from '@sioux-front/interfaces/Article';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {
  title: string;
  @Input() article: Article;
  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.title= this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => NewsService.getArticleByUri(params.get('uri')))
      .subscribe(article => (this.article = article));
  }
}
