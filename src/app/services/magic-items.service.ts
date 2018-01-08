import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
import { MagicItem } from '../model/magic-item'

@Injectable()
export class MagicItemsService {

  private railsServer = 'http://localhost:3000/'
  private magicItemsUrl = 'items/magic_items/weapons.json';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET magic items from the server */
  getMagicItems(): Observable<MagicItem[]> {
    return this.http.get<MagicItem[]>(this.railsServer + this.magicItemsUrl);
  }
}
