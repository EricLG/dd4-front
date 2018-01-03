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
    //this.getRacesList() // Dummy
  }

  getRaces(): void {
    this.racesService.getRaces().subscribe((jsonRaces: any): void  =>  {
        this.races = jsonRaces.map(jsonRace => new Race(
          jsonRace.id,
          jsonRace.name
        ));
    });
  }

  getRacesList() {
    this.races = [
      new Race(1, "Changelin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(2, "Cristallien", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(3, "Demi-elfe", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(4, "Demi-orque", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(5, "Déva", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(6, "Drakéide", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(7, "Drow", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(8, "Éladrin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(9, "Elfe", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(10, "Féral griffe-effilée", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(11, "Féral longue-dent", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(12, "Forgelier", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(13, "Genasi", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(14, "Githzerai", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(15, "Gnome", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(16, "Goliath", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(17, "Halfelin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(18, "Humain", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(19, "Kalashtar", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(20, "Minotaure", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(21, "Nain", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(22, "Silvyen", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race(23, "Tieffelin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
    ]
  }

  getChunkRaces() {
    return chunk(this.races, 6);
  }

}
