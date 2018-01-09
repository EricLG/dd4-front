import {Deserializable} from "./deserializable";

export class Source implements Deserializable<Source> {

  constructor(
    public name?: string,
  ) { }

  deserialize(input: any): Source {
    Object.assign(this, input);
    return this;
  }
}
