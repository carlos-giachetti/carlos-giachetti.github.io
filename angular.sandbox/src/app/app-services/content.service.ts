import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor() { }

  private _content: string = ' ';
  public get content() : string {
    return this._content;
  }
  public set content(v : string) {
    this._content = v.trim();
  }
}
