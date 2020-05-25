import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | office', function(hooks) {
  setupTest(hooks);

  test('returns correct address', function(assert) {
    const office = run(() =>
      this.owner.lookup('service:store').createRecord('office', {
        city: 'Washington',
        state: 'WA',
        zip: '1000'
      })
    );

    assert.equal(office.address, 'Washington, WA 1000');
  });
});
