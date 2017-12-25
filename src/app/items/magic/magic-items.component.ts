import { Component, OnInit } from '@angular/core';
import { MagicItem } from '../../model/magic-item'

// Services
import { MagicItemsService } from '../../services/magic-items.service';

@Component({
  selector: 'app-magic-items',
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
    this.magicItems = this.magicItemsService.getMagicItems()
  }

}
