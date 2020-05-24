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
    const firstStep = this.element.querySelector('[data-test-clinician]');
    assert.dom(firstStep).hasText('Clinician');

    // second step
    const secondStep = this.element.querySelector('[data-test-service]');
    assert.dom(secondStep).hasText('Select a service');
    assert.dom(secondStep).hasClass('active');

    // third step
    const thirdStep = this.element.querySelector('[data-test-location]');
    assert.dom(thirdStep).hasText('Select a location');
    assert.dom(thirdStep).hasClass('disabled');

    // fourth step
    const fourthStep = this.element.querySelector('[data-test-time]');
    assert.dom(fourthStep).hasText('Select data & time');
    assert.dom(fourthStep).hasClass('disabled');

    // fifth step
    const fifthStep = this.element.querySelector('[data-test-info]');
    assert.dom(fifthStep).hasText('Your information');
    assert.dom(fifthStep).hasClass('disabled');
  });

  test('it renders with appointment', async function(assert) {
    this.set('appointment', appointmentStub);

    await render(hbs`
      <Sidebar
        @appointment={{this.appointment}}
      />
    `);

    // first step
    const firstStep = this.element.querySelector('[data-test-clinician]');
    assert.dom(firstStep).hasText('Clinician');

    // second step
    const secondStep = this.element.querySelector('[data-test-service]');
    assert.dom(secondStep).hasText('Service');
    assert.dom('[data-test-service-description]')
      .hasText(appointmentStub.cptCode.description);
    assert.dom('[data-test-service-duration]')
      .hasText(`${appointmentStub.cptCode.duration} minutes`);

    // third step
    const thirdStep = this.element.querySelector('[data-test-location]');
    assert.dom(thirdStep).hasText('Select a location');
    assert.dom(thirdStep).hasClass('active');

    // fourth step
    const fourthStep = this.element.querySelector('[data-test-time]');
    assert.dom(fourthStep).hasText('Select data & time');
    assert.dom(fourthStep).hasClass('disabled');

    // fifth step
    const fifthStep = this.element.querySelector('[data-test-info]');
    assert.dom(fifthStep).hasText('Your information');
    assert.dom(fifthStep).hasClass('disabled');
  });

  test('it renders service duration 1 with singular', async function(assert) {
    appointmentStub.cptCode.duration = 1;
    this.set('appointment', appointmentStub);

    await render(hbs`
      <Sidebar
        @appointment={{this.appointment}}
      />
    `);

    const secondStep = this.element.querySelector('[data-test-service]');
    assert.dom(secondStep).hasText('Service');
    assert.dom('[data-test-service-description]')
      .hasText(appointmentStub.cptCode.description);
    assert.dom('[data-test-service-duration]')
      .hasText(`1 minute`);
  });
});
