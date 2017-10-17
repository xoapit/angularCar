import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { NewsService } from '../core/services/news.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent, ArticlesComponent, ContactComponent, SingleArticleComponent]
})
export class PagesModule {}
