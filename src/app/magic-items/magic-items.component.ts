import { Component, OnInit } from '@angular/core';
import { MagicItem } from '../model/magic-item'
import { ItemLevels } from '../model/item-levels'
import { ItemGroups } from '../model/item-groups'


// Services
import { MagicItemsService } from '../services/magic-items.service';

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

    const itemGroups = [
    new ItemGroups("Arbalètes"),
    new ItemGroups("Arcs"),
    new ItemGroups("Haches")
    ]
    const alteration = "Jet d'attaque et jet de dégâts."
    const critical = "+1D6 par bonus d'altération."
    this.magicItems = [
      new MagicItem("Arme magique", "Lorem", alteration, "propriete", "pouvoir", critical, itemLevels, itemGroups, "common", "MdJ1"),
      new MagicItem("Arme de feu", "Lorem feu", alteration, "propriete", "pouvoir", critical, itemLevels, itemGroups, "common", "MdJ2"),
      new MagicItem("Arme de froid", "Lorem glace", alteration, "propriete", "pouvoir", critical, itemLevels, itemGroups, "common", "MdJ3"),
      new MagicItem("Arme de foudre", "Lorem glace", alteration, "propriete", "pouvoir", critical, itemLevels, itemGroups, "common", "MdJ3"),
      new MagicItem("Arme de lumière", "Lorem glace", alteration, "propriete", "pouvoir", critical, itemLevels, itemGroups, "common", "MdJ3"),
      new MagicItem("Arme de sang", "Lorem glace", alteration, "propriete", "pouvoir", critical, itemLevels, itemGroups, "common", "MdJ3"),
      new MagicItem("Arme de fer", "Lorem glace", alteration, "propriete", "pouvoir", critical, itemLevels, itemGroups, "common", "MdJ3")
    ]
  }

}
