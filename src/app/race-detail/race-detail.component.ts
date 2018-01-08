import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Race } from '../model/race'
import { Feature } from '../model/feature'
import { Skill } from '../model/skill'
import { chunk } from 'lodash'

// Services
import { RacesService } from '../services/races.service';

@Component({
  selector: 'race',
  host: {
      class:'col-sm-12'
  },
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})

export class RaceDetailComponent implements OnInit {

  race: Race;
  races: Race[];

  constructor(
    private route: ActivatedRoute,
    private racesService: RacesService
  ) { }

  ngOnInit() {
    let id = 0
    this.route.params.subscribe((params: Params): void => {
      id = Number(params.id); // Les paramètres sont toujours des string
    });
    this.getRace(id)
  }

  getRace(id: Number): void {
    this.racesService.getRace(id).subscribe((jsonObject: any): void  =>  {
      this.race = new Race().deserialize(jsonObject.race)
      this.races = jsonObject.races.map(
        (jsonItem: Race) => new Race().deserialize(jsonItem)
      );
    });
  }
}
