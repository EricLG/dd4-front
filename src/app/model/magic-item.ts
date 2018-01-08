import { ItemLevels } from './item-levels';
import { ItemGroups } from './item-groups';

export class MagicItem {

  constructor(
    public name?: string,
    public description?: string,
    public alteration?: string,
    public property?: string,
    public power?: string,
    public critical?: string,
    public itemLevels?: ItemLevels[],
    public itemGroups?: ItemGroups[],
    public rarity?: string,
    public source?: string
  ) { }

  level_min() {
    return Math.min(...(this.itemLevels.map(itemLevels => itemLevels.level)))
  }

  item_groups() {
    return this.itemGroups.map(ig => (' ' + ig.name))
  }
}
