export class Feature {

  constructor(
    public id?: number,
    public name?: string,
    public kind?: string,
    public description?: string,
    public required?: string,
    public parent_feature_id?: number
  ){}

}
