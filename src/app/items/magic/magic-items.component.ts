import { Component, OnInit } from '@angular/core';
import { MagicItem } from '../../model/magic-item'
import { ItemLevels } from '../../model/item-levels'


// Services
import { MagicItemsService } from '../../services/magic-items.service';

@Component({
  selector: 'app-magic-items',
  host: {
      class:'col-sm-12'
  },
  templateUrl: './magic-items.component.html',
  styleUrls: ['./magic-items.component.css']
})

export class MagicItemsComponent implements OnInit {

  magicItems: MagicItem[] = [];

  constructor(private magicItemsService: MagicItemsService) { }

  ngOnInit() {
    this.getMagicItemsBack();
  }

  getMagicItems(): void {
    this.magicItemsService.getMagicItems().subscribe((jsonItems: any): void  =>  {
        this.magicItems = jsonItems.map(jsonItem => new MagicItem(
          jsonItem.name,
          jsonItem.description,
          jsonItem.alteration,
          jsonItem.property,
          jsonItem.power,
          jsonItem.critical,
          jsonItem.object_levels,
          jsonItem.rarity,
          jsonItem.source.name
        ));
    });
  }

  getMagicItemsBack(): void {
    const itemLevels = [
      new ItemLevels(1,  "360", "1"),
      new ItemLevels(6,  "1800", "2"),
      new ItemLevels(11, "9000", "3"),
      new ItemLevels(16, "45000", "4"),
      new ItemLevels(21, "225000", "5"),
      new ItemLevels(26, "1125000", "6")
    ]
    this.magicItems = [
      new MagicItem("Arme magique", "Lorem", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", itemLevels, "common", "MdJ1"),
      new MagicItem("Arme de feu", "Lorem feu", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", itemLevels, "common", "MdJ2"),
      new MagicItem("Arme de froid", "Lorem glace", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", itemLevels, "common", "MdJ3"),
      new MagicItem("Arme de foudre", "Lorem glace", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", itemLevels, "common", "MdJ3"),
      new MagicItem("Arme de lumière", "Lorem glace", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", itemLevels, "common", "MdJ3"),
      new MagicItem("Arme de sang", "Lorem glace", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", itemLevels, "common", "MdJ3"),
      new MagicItem("Arme de fer", "Lorem glace", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", itemLevels, "common", "MdJ3")
    ]
  }

}
