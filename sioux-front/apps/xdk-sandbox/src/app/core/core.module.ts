import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CommonModule } from '@angular/common';

import { StartupService } from './services/startup.service';
import { TokenService } from './net/token/token.service';
import { TranslatorService } from '@sioux-front/services/TranslatorService';
import { SettingsService } from '@sioux-front/services/SettingsService';
import { ScrollService } from '@sioux-front/services/ScrollService';
import { TitleService } from '@sioux-front/services/TitleService';
import { NewsService } from './services/news.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    StartupService,
    TranslatorService,
    TokenService,
    SettingsService,
    ScrollService,
    TitleService,
    NewsService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
