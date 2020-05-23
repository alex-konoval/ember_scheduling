import Model, { belongsTo } from '@ember-data/model';

export default class AppointmentModel extends Model {
  @belongsTo('cpt-code') cptCode;
  @belongsTo('office') office;
}
