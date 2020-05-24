import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('it has correct headers', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    const expectedHeaders = {
      'Accept': 'application/vnd.api+json',
      'Api-Version': '2020-01-01',
      'Application-Build-Version': '0.0.1',
      'Application-Platform': 'web'
    }

    assert.deepEqual(adapter.headers, expectedHeaders);
  });
});
