import { Injectable, Inject } from '@angular/core';
import { Title, DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  constructor(private title: Title, @Inject(DOCUMENT) private doc: Document) {}

  private _prefix = '';
  private _suffix = '';
  private _separator = ' - ';
  private _reverse = false;

  set separator(value: string) {
    this._separator = value;
  }

  set prefix(value: string) {
    this._prefix = value;
  }

  set suffix(value: string) {
    this._suffix = value;
  }

  set reverse(value: boolean) {
    this._reverse = value;
  }

  private getByElement(): string {
    const el = this.doc.querySelector('.content__title h1');
    if (el) {
      return el.firstChild.textContent.trim();
    }
    return '';
  }

  setTitle(title?: string | string[]) {
    if (!title) {
      title = this.getByElement();
    }
    if (title && !Array.isArray(title)) {
      title = [title];
    }

    let newTitles = [];
    if (this._prefix) {
      newTitles.push(this._prefix);
    }
    if (title && title.length > 0) {
      newTitles.push(...(title as string[]));
    }
    if (this._suffix) {
      newTitles.push(this._suffix);
    }
    if (this._reverse) {
      newTitles = newTitles.reverse();
    }
    this.title.setTitle(newTitles.join(this._separator));
  }
}
