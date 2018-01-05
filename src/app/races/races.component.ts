import { Component, OnInit } from '@angular/core';

import { Race } from '../model/race'
import { chunk } from 'lodash'

// Services
import { RacesService } from '../services/races.service';

@Component({
  selector: 'races',
  host: {
      class:'col-sm-12'
  },
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})

export class RacesComponent implements OnInit {

  races: Race[] = [];

  constructor(private racesService: RacesService) { }

  ngOnInit() {
    this.getRaces() // Real API
  }

  getRaces(): void {
    this.racesService.getRaces().subscribe((jsonObject: any): void  =>  {
        this.races = jsonObject.races.map(jsonItem => new Race(
          jsonItem.id,
          jsonItem.name
        ));
    });
  }

  getChunkRaces() {
    return chunk(this.races, 6);
  }

}
