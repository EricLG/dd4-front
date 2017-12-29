import { Component, OnInit } from '@angular/core';

import { Race } from '../model/race'

@Component({
  selector: 'races',
  templateUrl: './races.component.html'
})

export class RacesComponent implements OnInit {

  races: Race[] = [];

  constructor() { }

  ngOnInit() {
    this.getRacesList()
  }

  getRacesList() {
    this.races = [
      new Race("Changelin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Cristallien", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Demi-elfe", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Demi-orque", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Déva", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Drakéide", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Drow", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Éladrin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Elfe", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Féral griffe-effilée", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Féral longue-dent", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Forgelier", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Genasi", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Githzerai", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Gnome", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Goliath", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Halfelin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Humain", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Kalashtar", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Minotaure", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Nain", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Silvyen", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
      new Race("Tieffelin", "1,65 m à 1,80 m", "60 à 80 kg", "M", "6", "normale", "commun", "0", "Eberron"),
    ]
  }

}
