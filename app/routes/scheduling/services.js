import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SchedulingServicesRoute extends Route {
  @service store;

  queryParams = {
    clinicianID: {
      refreshModel: true
    }
  }

  model({ clinicianID }) {
    return this.store.query('cpt-code', { 'filter[clinicianId]': clinicianID });
  }
}
