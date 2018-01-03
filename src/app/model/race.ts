import { deburr, toLower, replace } from 'lodash'

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
  ){}

  format_name() {
  	return replace(deburr(toLower(this.name)), ' ', '_')

  }
}
