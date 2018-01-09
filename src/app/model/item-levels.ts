import {Deserializable} from "./deserializable";

export class ItemLevels implements Deserializable<ItemLevels> {

  constructor(
    public level?: number,
    public price?: string,
    public alteration?: string
  ) { }

  deserialize(input: any): ItemLevels {
    Object.assign(this, input);
    return this;
  }
}
