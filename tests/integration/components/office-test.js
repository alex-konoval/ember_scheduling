import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | office', function(hooks) {
  setupRenderingTest(hooks);

  let officeStub;

  hooks.beforeEach(function() {
    officeStub = {
      name: 'Dr. Mark',
      street: 'Defense Pentagon',
      city: 'Washington',
      state: 'WA',
      zip: '1000',
      phone: '(703) 571-3343',
    };
  });

  test('it renders', async function(assert) {
    this.set('office', officeStub);
    await render(hbs`<Office @office={{this.office}}/>`);

    assert.dom('[data-test-name]').hasText(officeStub.name);
    assert.dom('[data-test-street]').hasText(officeStub.street);
    const address = `${officeStub.city}, ${officeStub.state} ${officeStub.zip}`
    assert.dom('[data-test-address]').hasText(address);
    assert.dom('[data-test-phone]').hasText(officeStub.phone);
  });
});
