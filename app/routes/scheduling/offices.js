import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SchedulingOfficesRoute extends Route {
  @service store;

  queryParams = {
    cptCodeId: {
      refreshModel: true
    },
    clinicianID: {
      refreshModel: true
    }
  };

  model({ cptCodeId, clinicianID }) {
    return this.store.query('office', {
      'filter[clinicianId]': clinicianID,
      'filter[cptCodeId]': cptCodeId,
    });
  }
}
