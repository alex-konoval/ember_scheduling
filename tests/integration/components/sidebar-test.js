import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sidebar', function(hooks) {
  setupRenderingTest(hooks);
  let appointmentStub;

  hooks.beforeEach(function() {
    appointmentStub = {
      cptCode: {
        description: 'Help client',
        duration: 10
      }
    };
  });

  test('it renders', async function(assert) {
    await render(hbs`<Sidebar />`);

    // first step
    assert.dom('[data-test-clinician]').hasText('Clinician');

    // second step
    assert.dom('[data-test-service]').hasText('Select a service');
    assert.dom('[data-test-service]').hasClass('active');

    // third step
    assert.dom('[data-test-location]').hasText('Select a location');
    assert.dom('[data-test-location]').hasClass('disabled');

    // fourth step
    assert.dom('[data-test-time]').hasText('Select data & time');
    assert.dom('[data-test-time]').hasClass('disabled');

    // fifth step
    assert.dom('[data-test-info]').hasText('Your information');
    assert.dom('[data-test-info]').hasClass('disabled');
  });

  test('it renders with appointment', async function(assert) {
    this.set('appointment', appointmentStub);

    await render(hbs`
      <Sidebar
        @appointment={{this.appointment}}
      />
    `);

    // first step
    assert.dom('[data-test-clinician]').hasText('Clinician');

    // second step
    assert.dom('[data-test-service]').hasText('Service');
    assert.dom('[data-test-service-description]').hasText(appointmentStub.cptCode.description);
    assert.dom('[data-test-service-duration]').hasText(`${appointmentStub.cptCode.duration} minutes`);

    // third step
    assert.dom('[data-test-location]').hasText('Select a location');
    assert.dom('[data-test-location]').hasClass('active');

    // fourth step
    assert.dom('[data-test-time]').hasText('Select data & time');
    assert.dom('[data-test-time]').hasClass('disabled');

    // fifth step
    assert.dom('[data-test-info]').hasText('Your information');
    assert.dom('[data-test-info]').hasClass('disabled');
  });

  test('it renders service duration 1 with singular', async function(assert) {
    appointmentStub.cptCode.duration = 1;
    this.set('appointment', appointmentStub);

    await render(hbs`
      <Sidebar
        @appointment={{this.appointment}}
      />
    `);

    assert.dom('[data-test-service]').hasText('Service');
    assert.dom('[data-test-service-description]').hasText(appointmentStub.cptCode.description);
    assert.dom('[data-test-service-duration]').hasText(`1 minute`);
  });
});
