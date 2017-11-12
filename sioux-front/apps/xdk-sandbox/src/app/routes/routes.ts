import { BaseLayoutComponent } from '../layout/base/base.component';
import { HomeComponent } from '../pages/home/home.component';
import { ArticlesComponent } from '../pages/articles/articles.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { SingleArticleComponent } from '../pages/single-article/single-article.component';

export const routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'article/:id', component: SingleArticleComponent },
      { path: 'contact', component: ContactComponent }
      // { path: 'register', component: RegisterComponent, data: { translate: 'register' } },
      // { path: 'login', component: LoginComponent, data: { title: 'login' } },
    ]
  },
  // { path: 'login', component: LoginComponent, data: { title: 'login' } },
  // { path: 'forget', component: ForgetComponent, data: { translate: 'forget' } },
  // { path: '404', component: Page404Component },
  // { path: '500', component: Page500Component },
  { path: '**', redirectTo: 'home' }
];
