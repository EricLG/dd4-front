import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, tap } from 'rxjs/operators';
import { Race } from '../model/race'

@Injectable()
export class RacesService {

  private railsServer = 'http://localhost:3000/'
  private racesUrl = 'races.json';  // URL to web api
  private raceUrl = 'races/';  // URL to web api

  constructor(private http: HttpClient) {}

  /** GET races from the server */
  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.railsServer + this.racesUrl);
  }

  /** GET race from the server */
  getRace(id): Observable<Race> {
    return this.http.get<Race>(this.railsServer + this.raceUrl + id + '.json');
  }
}
