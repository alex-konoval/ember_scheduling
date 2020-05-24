import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import ENV from 'scheduling/config/environment';

module('Acceptance | user selects a service', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting / redirects to services selection', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), `/scheduling/services?clinicianID=${ENV.clinicianID}`);
  });
});
