import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:scheduling/services');
    assert.ok(controller);
  });
});
