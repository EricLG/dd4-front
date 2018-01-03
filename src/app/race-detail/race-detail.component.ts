import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Race } from '../model/race'
import { chunk } from 'lodash'

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
  id: Number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params: Params): void => {
		this.id = Number(params.id); // Les paramètres sont toujours des string
	});
	this.getDummyRace(this.id)
  }

  getDummyRace(id){
  	this.race = new Race("Éladrin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "MdJ1")
  }

}