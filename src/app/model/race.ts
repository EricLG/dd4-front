import { deburr, toLower, replace } from 'lodash'

import {Deserializable} from "./deserializable";
// Import des modèles pour les relations
import { Feature } from './feature';
import { Skill } from './skill';
import { Source } from './source';

export class Race implements Deserializable<Race>  {

  constructor(
  public id?: number,
    public name?: string,
    public average_height?: string,
    public average_weight?: string,
    public cat_size?: string,
    public speed?: string,
    public vision?: string,
    public language?: string,
    public nb_language_sup?: string,
    public information?: string,
    public source?: Source,
    public features?: Feature[],
    public skill?: Skill
  ) { }

  deserialize(input: any): Race {
    Object.assign(this, input);
    if (input.features) {
      this.features = input.features.map((inputFeatures: Feature) => new Feature().deserialize(inputFeatures));
    }
    if (input.skill) {
      this.skill = new Skill().deserialize(input.skill);
    }
    if (input.source) {
      this.source = new Source().deserialize(input.source);
    }

    return this;
  }

  format_name() {
    return replace(deburr(toLower(this.name)), ' ', '_')
  }
}
