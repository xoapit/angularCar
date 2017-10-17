import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

const KEY = 'layout';

export interface User {
  name?: string;
  avatar?: string;
  email?: string;
  [key: string]: any;
}

export interface App {
  name?: string;
  description?: string;
  year?: number;
  [key: string]: any;
}

export type SidebarThemeType = 'light' | 'dark';

export interface Layout {
  fixed: boolean;
  collapsed: boolean;
  boxed: boolean;
  lang: string;
}

@Injectable()
export class SettingsService {
  app: App = {
    year: new Date().getFullYear()
  };

  user: User = {};

  private _layout: Layout = null;

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(
        <Layout>{
          fixed: true,
          collapsed: false,
          boxed: false,
          theme: 'A',
          lang: null
        },
        this.local.get(KEY)
      );
      this.local.set(KEY, this._layout);
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value;
      this.local.set(KEY, this._layout);
      return true;
    }
    return false;
  }

  setApp(val: App) {
    this.app = Object.assign(this.app, val);
  }

  setUser(val: User) {
    this.user = Object.assign(this.user, val);
  }

  constructor(private local: LocalStorageService) {}
}
