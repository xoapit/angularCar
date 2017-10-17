import { NgModule, LOCALE_ID, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService } from 'angular-web-storage';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StartupService } from './core/services/startup.service';
import { ExampleInterceptor } from '@sioux-front/services/ExampleInterceptor';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core/net/token/token.interceptor';
import {ArticleService} from "./core/services/article/article.service";
import {PetService} from "./core/services/pet/pet.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/i18n/`, '.json');
}

export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    SharedModule.forRoot(),
    CoreModule,
    LayoutModule,
    RoutesModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    HttpClient,
    PetService,
    ArticleService,
    { provide: LOCALE_ID, useValue: 'vi' },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ]
})
export class AppModule {}
