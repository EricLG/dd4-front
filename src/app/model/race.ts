import { deburr, toLower, replace } from 'lodash'

// Import des modèles pour les relations
import { Feature } from './feature';
import { Skill } from './skill';

export class Race {

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
    public source?: string,
    public features?: Feature[],
    public skill?: Skill
  ){}

  format_name() {
  	return replace(deburr(toLower(this.name)), ' ', '_')

  }
}
