import Route from '@ember/routing/route';
import ENV from 'scheduling/config/environment';

export default class ApplicationRoute extends Route {
  redirect() {
    this.transitionTo('scheduling.services', { queryParams: { clinicianID: ENV.clinicianID } });
  }
}
