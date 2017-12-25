export class MagicItem {

  constructor(
    public name?: string,
    public description?: string,
    public alteration?: string,
    public property?: string,
    public power?: string,
    public critical?: string,
    public objectLevels?: Object,
    public rarity?: string,
    public source?: string
  ){}

  level_min() {
    return Math.min(...(this.objectLevels.map(level => level.level)))
  }
}
