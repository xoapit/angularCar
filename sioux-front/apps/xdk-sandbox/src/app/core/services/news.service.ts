import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '@sioux-front/interfaces/Article';

@Injectable()
export class NewsService {
  constructor() {}

  static getArticleByUri(uri: string): Observable<Article> {
    console.log(uri);
    const article = new Article();
    article.Uri = uri;
    return Observable.of(article);
  }
}
