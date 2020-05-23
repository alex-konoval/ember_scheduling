import Model, { attr, hasMany } from '@ember-data/model';

export default class CptCodeModel extends Model {
  @attr('string') description;
  @attr('number') duration;
  @attr('number') rate;
  @attr('boolean') callToBook;

  @hasMany('office') offices;
}
