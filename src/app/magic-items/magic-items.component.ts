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
    this.getMagicItems();
  }

  getMagicItems(): void {
    this.magicItemsService.getMagicItems().subscribe((jsonItems: any): void  =>  {
        this.magicItems = jsonItems.map(
          (jsonItem: MagicItem) => new MagicItem().deserialize(jsonItem)
        );
    });
  }
}
