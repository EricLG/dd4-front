import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MagicItem } from '../model/magic-item'

@Injectable()
export class MagicItemsService {

  private railsServer = 'http://localhost:3000/'
  private magicItemsUrl = 'items/magic_items/weapons.json';  // URL to web api

  private mockMagicItems = `[{"name":"Arme magique","description":"Lorem","alteration":"Jet d'attaque et jet de dégâts.","property":"propriete","power":"pouvoir","critical":"+1D6 par bonus d'altération.","itemLevels":[{"level":1,"price":"360","alteration":"1"},{"level":6,"price":"1800","alteration":"2"},{"level":11,"price":"9000","alteration":"3"},{"level":16,"price":"45000","alteration":"4"},{"level":21,"price":"225000","alteration":"5"},{"level":26,"price":"1125000","alteration":"6"}],"itemGroups":[{"name":"Arbalètes"},{"name":"Arcs"},{"name":"Haches"}],"rarity":"common","source":{"name":"MdJ1"}},{"name":"Arme de feu","description":"Lorem feu","alteration":"Jet d'attaque et jet de dégâts.","property":"propriete","power":"pouvoir","critical":"+1D6 par bonus d'altération.","itemLevels":[{"level":1,"price":"360","alteration":"1"},{"level":6,"price":"1800","alteration":"2"},{"level":11,"price":"9000","alteration":"3"},{"level":16,"price":"45000","alteration":"4"},{"level":21,"price":"225000","alteration":"5"},{"level":26,"price":"1125000","alteration":"6"}],"itemGroups":[{"name":"Arbalètes"},{"name":"Arcs"},{"name":"Haches"}],"rarity":"common","source":{"name":"MdJ2"}},{"name":"Arme de froid","description":"Lorem glace","alteration":"Jet d'attaque et jet de dégâts.","property":"propriete","power":"pouvoir","critical":"+1D6 par bonus d'altération.","itemLevels":[{"level":1,"price":"360","alteration":"1"},{"level":6,"price":"1800","alteration":"2"},{"level":11,"price":"9000","alteration":"3"},{"level":16,"price":"45000","alteration":"4"},{"level":21,"price":"225000","alteration":"5"},{"level":26,"price":"1125000","alteration":"6"}],"itemGroups":[{"name":"Arbalètes"},{"name":"Arcs"},{"name":"Haches"}],"rarity":"common","source":{"name":"MdJ3"}},{"name":"Arme de foudre","description":"Lorem glace","alteration":"Jet d'attaque et jet de dégâts.","property":"propriete","power":"pouvoir","critical":"+1D6 par bonus d'altération.","itemLevels":[{"level":1,"price":"360","alteration":"1"},{"level":6,"price":"1800","alteration":"2"},{"level":11,"price":"9000","alteration":"3"},{"level":16,"price":"45000","alteration":"4"},{"level":21,"price":"225000","alteration":"5"},{"level":26,"price":"1125000","alteration":"6"}],"itemGroups":[{"name":"Arbalètes"},{"name":"Arcs"},{"name":"Haches"}],"rarity":"common","source":{"name":"MdJ3"}},{"name":"Arme de lumière","description":"Lorem glace","alteration":"Jet d'attaque et jet de dégâts.","property":"propriete","power":"pouvoir","critical":"+1D6 par bonus d'altération.","itemLevels":[{"level":1,"price":"360","alteration":"1"},{"level":6,"price":"1800","alteration":"2"},{"level":11,"price":"9000","alteration":"3"},{"level":16,"price":"45000","alteration":"4"},{"level":21,"price":"225000","alteration":"5"},{"level":26,"price":"1125000","alteration":"6"}],"itemGroups":[{"name":"Arbalètes"},{"name":"Arcs"},{"name":"Haches"}],"rarity":"common","source":{"name":"MdJ3"}},{"name":"Arme de sang","description":"Lorem glace","alteration":"Jet d'attaque et jet de dégâts.","property":"propriete","power":"pouvoir","critical":"+1D6 par bonus d'altération.","itemLevels":[{"level":1,"price":"360","alteration":"1"},{"level":6,"price":"1800","alteration":"2"},{"level":11,"price":"9000","alteration":"3"},{"level":16,"price":"45000","alteration":"4"},{"level":21,"price":"225000","alteration":"5"},{"level":26,"price":"1125000","alteration":"6"}],"itemGroups":[{"name":"Arbalètes"},{"name":"Arcs"},{"name":"Haches"}],"rarity":"common","source":{"name":"MdJ3"}},{"name":"Arme de fer","description":"Lorem glace","alteration":"Jet d'attaque et jet de dégâts.","property":"propriete","power":"pouvoir","critical":"+1D6 par bonus d'altération.","itemLevels":[{"level":1,"price":"360","alteration":"1"},{"level":6,"price":"1800","alteration":"2"},{"level":11,"price":"9000","alteration":"3"},{"level":16,"price":"45000","alteration":"4"},{"level":21,"price":"225000","alteration":"5"},{"level":26,"price":"1125000","alteration":"6"}],"itemGroups":[{"name":"Arbalètes"},{"name":"Arcs"},{"name":"Haches"}],"rarity":"common","source":{"name":"MdJ3"}}]`

  constructor(private http: HttpClient) { }

  /** GET magic items from the server */
  getMagicItems(): Observable<MagicItem[]> {
    return this.http.get<MagicItem[]>(this.railsServer + this.magicItemsUrl)
      .pipe(catchError(this.handleError('getMagicItems', JSON.parse(this.mockMagicItems)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    }
  };
}
