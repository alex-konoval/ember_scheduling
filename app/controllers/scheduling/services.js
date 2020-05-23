import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ServicesController extends Controller {

  @action
  selectService(cptCode) {
    this.appointment.cptCode = cptCode

    this.transitionToRoute('scheduling.offices', { queryParams: {
        clinicianID: this.clinicianID,
        cptCodeId: cptCode.id
      }
    })
  }
}
