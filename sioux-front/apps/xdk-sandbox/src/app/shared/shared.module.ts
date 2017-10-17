import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularWebStorageModule } from 'angular-web-storage';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

import { MomentDatePipe } from '@sioux-front/pipes/moment-date.pipe';
import { KeysPipe } from '@sioux-front/pipes/keys.pipe';
import { YNPipe } from '@sioux-front/pipes/yn.pipe';
import { ModalHelper } from '@sioux-front/helper/modal.helper';
import { IconsModule } from './icons/icons.module';

const DIRECTIVES = [];
const PIPES = [MomentDatePipe, KeysPipe, YNPipe];
const HELPERS = [ModalHelper];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularWebStorageModule,
    NgZorroAntdModule.forRoot(),
    IconsModule
  ],
  declarations: [...DIRECTIVES, ...PIPES],
  providers: [...HELPERS],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule,
    AngularWebStorageModule,
    TranslateModule,
    IconsModule,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
