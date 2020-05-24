import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Header />`);
    assert.dom('[data-test-title]')
        .hasText('Request an Appointment', 'The user sees the correct title.');
    assert.dom('[data-test-sub-title]')
        .hasText('The Therapy Center', 'The user sees the correct subtitle.');
  });
});
