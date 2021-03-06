import {Deserializable} from "./deserializable";

export class ItemGroups implements Deserializable<ItemGroups> {

  constructor(
    public name?: string
  ) { }

  deserialize(input: any): ItemGroups {
    Object.assign(this, input);
    return this;
  }
}
