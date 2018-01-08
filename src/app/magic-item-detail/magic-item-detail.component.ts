import { Component, OnInit, Input } from '@angular/core';

import { MagicItem } from '../model/magic-item'

@Component({
  selector: 'magic-item',
  templateUrl: './magic-item-detail.component.html',
  styleUrls: ['./magic-item-detail.component.css']
})

export class MagicItemDetailComponent implements OnInit {

  @Input() item: MagicItem;

  constructor() { }

  ngOnInit() { }
}
