import {Deserializable} from "./deserializable";

export class Skill implements Deserializable<Skill> {

  constructor(
    public id?: number,
    public acrobatics?: number,
    public arcana?: number,
    public athletics?: number,
    public bluff?: number,
    public diplomacy?: number,
    public dungeoneering?: number,
    public endurance?: number,
    public heal?: number,
    public history?: number,
    public insight?: number,
    public intimidate?: number,
    public nature?: number,
    public perception?: number,
    public religion?: number,
    public stealth?: number,
    public streetwise?: number,
    public thievery?: number,
    public origin?: number
  ){}

  deserialize(input: any): Skill {
    Object.assign(this, input);
    return this;
  }

  format() {
  	const result = []
    if (this.acrobatics > 0) {
    	result.push("Acrobaties : " + this.acrobatics)
    }
    if (this.arcana > 0) {
    	result.push("Arcanes : " + this.arcana)
    }
    if (this.athletics > 0) {
    	result.push("Athlétisme : " + this.athletics)
    }
    if (this.bluff > 0) {
    	result.push("Bluff : " + this.bluff)
    }
    if (this.diplomacy > 0) {
    	result.push("Diplomatie : " + this.diplomacy)
    }
    if (this.dungeoneering > 0) {
    	result.push("Exploration : " + this.dungeoneering)
    }
    if (this.endurance > 0) {
    	result.push("Endurance : " + this.endurance)
    }
    if (this.heal > 0) {
    	result.push("Soins : " + this.heal)
    }
    if (this.history > 0) {
    	result.push("Histoire : " + this.history)
    }
    if (this.insight > 0) {
    	result.push("Intuition : " + this.insight)
    }
    if (this.intimidate > 0) {
    	result.push("Intimidation : " + this.intimidate)
    }
    if (this.nature > 0) {
    	result.push("Nature : " + this.nature)
    }
    if (this.perception > 0) {
    	result.push("Perception : " + this.perception)
    }
    if (this.religion > 0) {
    	result.push("Religion : " + this.religion)
    }
    if (this.stealth > 0) {
    	result.push("Discrétion : " + this.stealth)
    }
    if (this.streetwise > 0) {
    	result.push("Connaissance de la rue : " + this.streetwise)
    }
    if (this.thievery > 0) {
    	result.push("larcin : " + this.thievery)
    }
    return result.join(', ')
  }
}
