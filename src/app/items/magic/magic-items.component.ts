import { Component, OnInit } from '@angular/core';
import { MagicItem } from '../../model/magic-item'

@Component({
  selector: 'app-magic-items',
  templateUrl: './magic-items.component.html',
  styleUrls: ['./magic-items.component.css']
})

export class MagicItemsComponent implements OnInit {

  magicItems: MagicItem[] = [];

  constructor() { }

  ngOnInit() {
    this.getMagicItems();
  }

  getMagicItems(): void {
    this.magicItems.push(
      new MagicItem("Arme magique", "Lorem", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", "1", "common", "MdJ1"),
      new MagicItem("Arme de feu", "Lorem feu", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", "2", "common", "MdJ2"),
      new MagicItem("Arme de froid", "Lorem glace", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", "3", "common", "MdJ3")
      )
  }

}
