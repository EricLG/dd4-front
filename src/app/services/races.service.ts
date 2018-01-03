import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { map, tap } from 'rxjs/operators';
import { Race } from '../model/race'

@Injectable()
export class RacesService {

  private railsServer = 'http://localhost:3000/'
  private racesUrl = 'races.json';  // URL to web api
  private raceUrl = 'races/';  // URL to web api

  // Mock pour dev sans back-end
  private MockRaces = '{"races": [{"id": 1,"name": "Changelin"}, {"id": 2,"name": "Cristallien"}, {"id": 3,"name": "Demi-elfe"}, {"id": 4,"name": "Demi-orque"}, {"id": 5,"name": "Déva"}, {"id": 6,"name": "Drakéide"}, {"id": 7,"name": "Drow"}, {"id": 8,"name": "Éladrin"}, {"id": 9,"name": "Elfe"}, {"id": 10,"name": "Féral griffe-effilée"}, {"id": 11,"name": "Féral longue-dent"}, {"id": 12,"name": "Forgelier"}, {"id": 13,"name": "Genasi"}, {"id": 14,"name": "Githzerai"}, {"id": 15,"name": "Gnome"}, {"id": 16,"name": "Goliath"}, {"id": 17,"name": "Halfelin"}, {"id": 18,"name": "Humain"}, {"id": 19,"name": "Kalashtar"}, {"id": 20,"name": "Minotaure"}, {"id": 21,"name": "Nain"}, {"id": 22,"name": "Silvyen"}, {"id": 23,"name": "Tieffelin"}]}'
  private MockRace = '{ "races": [ { "id": 1, "name": "Changelin" }, { "id": 2, "name": "Cristallien" }, { "id": 3, "name": "Demi-elfe" }, { "id": 4, "name": "Demi-orque" }, { "id": 5, "name": "Déva" }, { "id": 6, "name": "Drakéide" }, { "id": 7, "name": "Drow" }, { "id": 8, "name": "Éladrin" }, { "id": 9, "name": "Elfe" }, { "id": 10, "name": "Féral griffe-effilée" }, { "id": 11, "name": "Féral longue-dent" }, { "id": 12, "name": "Forgelier" }, { "id": 13, "name": "Genasi" }, { "id": 14, "name": "Githzerai" }, { "id": 15, "name": "Gnome" }, { "id": 16, "name": "Goliath" }, { "id": 17, "name": "Halfelin" }, { "id": 18, "name": "Humain" }, { "id": 19, "name": "Kalashtar" }, { "id": 20, "name": "Minotaure" }, { "id": 21, "name": "Nain" }, { "id": 22, "name": "Silvyen" }, { "id": 23, "name": "Tieffelin" } ], "race": {"id":1,"name":"Changelin","average_height":"1,65 m à 1,80 m","average_weight":"60 à 80 kg","cat_size":"M","speed":6,"vision":"normale","language":"commun","nb_language_sup":0,"information":null,"skill_id":1,"source_id":7,"created_at":"2017-06-09T20:42:22.689Z","updated_at":"2017-06-09T20:42:22.689Z","source":{"id":7,"name":"Eberron","created_at":"2017-06-09T20:42:21.821Z","updated_at":"2017-06-09T20:42:21.821Z"},"skill":{"id":1,"acrobatics":0,"arcana":0,"athletics":0,"bluff":2,"diplomacy":0,"dungeoneering":0,"endurance":0,"heal":0,"history":0,"insight":2,"intimidate":0,"nature":0,"perception":0,"religion":0,"stealth":0,"streetwise":0,"thievery":0,"origin":"race","created_at":"2017-06-09T20:42:22.686Z","updated_at":"2017-06-09T20:42:22.686Z"},"features":[{"id":67,"name":"Change-forme","kind":"race","description":"vous avez le pouvoir \u003cem\u003eDéguisement du changelin\u003c/em\u003e.","required":"required","parent_feature_id":null,"created_at":"2017-06-09T20:42:23.165Z","updated_at":"2017-06-09T20:42:23.165Z"},{"id":68,"name":"Défense mentale","kind":"race","description":"vous bénéficiez d\'un bonus racial de +1 en Volonté.","required":"required","parent_feature_id":null,"created_at":"2017-06-09T20:42:23.169Z","updated_at":"2017-06-09T20:42:23.169Z"},{"id":69,"name":"Métamorphe","kind":"race","description":"vous êtes un métamorphe et pouvez modifier votre apparence. Vous êtes donc sujet aux effets et états préjudiciables qui affectent les métamorphes.","required":"required","parent_feature_id":null,"created_at":"2017-06-09T20:42:23.173Z","updated_at":"2017-06-09T20:42:23.173Z"},{"id":70,"name":"Ruse du changelin","kind":"race","description":"vous avez le pouvoir \u003cem\u003eRuse du changelin\u003c/em\u003e.","required":"required","parent_feature_id":null,"created_at":"2017-06-09T20:42:23.178Z","updated_at":"2017-06-09T20:42:23.178Z"}]} }'

  constructor(private http: HttpClient) {}

  /** GET races from the server */
  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.railsServer + this.racesUrl);
  }

  getDummyRaces(): Observable<String> {
    return Observable.of(JSON.parse(this.MockRaces))
  }

  /** GET race from the server */
  getRace(id): Observable<Race> {
    return this.http.get<Race>(this.railsServer + this.raceUrl + id + '.json');
  }

  getDummyRace(id): Observable<String> {
    return Observable.of(JSON.parse(this.MockRace))
  }
 
}
