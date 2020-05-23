import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | scheduling/offices', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:scheduling/offices');
    assert.ok(route);
  });
});
