import { Component, OnInit, Input } from '@angular/core';

import { ItemLevels } from '../model/item-levels'
import { chunk } from 'lodash'

@Component({
  selector: 'item-levels',
  templateUrl: './item-levels.component.html'
})

export class ItemLevelsComponent implements OnInit {

  @Input() itemLevels: ItemLevels[];
  leftItemLevels: ItemLevels[]
  rightItemLevels: ItemLevels[]

  constructor() { }

  ngOnInit() {
  	this.getLeftItemLevels()
  }


  getLeftItemLevels() {

    const levels = chunk(this.itemLevels, Math.ceil(this.itemLevels.length /2));
    this.leftItemLevels = levels[0];
    this.rightItemLevels = levels[1];

    return levels
  }

}
