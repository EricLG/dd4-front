import {Deserializable} from "./deserializable";

export class Feature implements Deserializable<Feature> {

  constructor(
    public id?: number,
    public name?: string,
    public kind?: string,
    public description?: string,
    public required?: string,
    public parent_feature_id?: number
  ) { }

  deserialize(input: any): Feature {
    Object.assign(this, input);
    return this;
  }
}
