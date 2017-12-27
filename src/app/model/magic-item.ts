import { ItemLevels } from '../model/item-levels'

export class MagicItem {

  constructor(
    public name?: string,
    public description?: string,
    public alteration?: string,
    public property?: string,
    public power?: string,
    public critical?: string,
    public itemLevels?: ItemLevels[],
    public rarity?: string,
    public source?: string
  ){}

  level_min() {
    return Math.min(...(this.itemLevels.map(itemLevels => itemLevels.level)))
  }

}
