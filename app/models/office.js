import Model, { attr, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default class OfficeModel extends Model {
  @attr('string') city;
  @attr('string') name;
  @attr('string') state;
  @attr('string') street;
  @attr('string') zip;
  @attr('string') phone;
  @attr('boolean') isVideo;

  @belongsTo('cpt-code') cptCode;

  @computed('city', 'state', 'zip')
  get address() {
    return `${this.city}, ${this.state} ${this.zip}`;
  }
}
