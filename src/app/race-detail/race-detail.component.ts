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

  race: Race = new Race();
  races: Race[] = [];
  id: Number = 0;

  constructor(private route: ActivatedRoute, private racesService: RacesService) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params): void => {
		  this.id = Number(params.id); // Les paramètres sont toujours des string
	  });
	  this.getRace(this.id)
  }

  getRace(id): void {
    //const races = this.racesService.getDummyRace(id)
    const races = this.racesService.getRace(id)
    races.subscribe((jsonObject: any): void  =>  {
      this.race = new Race(
        jsonObject.race.id,
        jsonObject.race.name,
        jsonObject.race.average_height,
        jsonObject.race.average_weight,
        jsonObject.race.cat_size,
        jsonObject.race.speed,
        jsonObject.race.vision,
        jsonObject.race.language,
        jsonObject.race.nb_language_sup,
        jsonObject.race.information,
        jsonObject.race.source.name,
        jsonObject.race.features.map(jsonFeature => new Feature(
          jsonFeature.id,
          jsonFeature.name,
          jsonFeature.kind,
          jsonFeature.description,
          jsonFeature.required,
          jsonFeature.parent_feature_id
        )),
        jsonObject.race.skill = new Skill(
          jsonObject.race.skill.id,
          jsonObject.race.skill.acrobatics,
          jsonObject.race.skill.arcana,
          jsonObject.race.skill.athletics,
          jsonObject.race.skill.bluff,
          jsonObject.race.skill.diplomacy,
          jsonObject.race.skill.dungeoneering,
          jsonObject.race.skill.endurance,
          jsonObject.race.skill.heal,
          jsonObject.race.skill.history,
          jsonObject.race.skill.insight,
          jsonObject.race.skill.intimidate,
          jsonObject.race.skill.nature,
          jsonObject.race.skill.perception,
          jsonObject.race.skill.religion,
          jsonObject.race.skill.stealth,
          jsonObject.race.skill.streetwise,
          jsonObject.race.skill.thievery,
          jsonObject.race.skill.origin
        )
      );
      this.races = jsonObject.races.map(jsonItem => new Race(
        jsonItem.id,
        jsonItem.name
      ));
    });
  }

}
