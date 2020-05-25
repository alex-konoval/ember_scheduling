import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { run } from '@ember/runloop';

module('Integration | Component | service', function(hooks) {
  setupRenderingTest(hooks);

  let serviceStub;

  hooks.beforeEach(function() {
    serviceStub = run(() =>
      this.owner.lookup('service:store').createRecord('cpt-code', {
        description: 'Help client',
        duration: 10
      })
    );
  });

  test('it renders correctly', async function(assert) {
    this.set('service', serviceStub);
    this.set('selectService', () => {});

    await render(hbs`
      <Service
        @service={{this.service}}
        @selectService={{this.selectService}}
      />
    `);

    assert.dom('[data-test-description]').hasText(serviceStub.description);
    assert.dom('[data-test-duration]').hasText(`${serviceStub.duration} minutes`);
  });

  test('it renders correctly with duration 1', async function(assert) {
    serviceStub.duration = 1;
    this.set('service', serviceStub);
    this.set('selectService', () => {});

    await render(hbs`
      <Service
        @service={{this.service}}
        @selectService={{this.selectService}}
      />
    `);

    assert.dom('[data-test-description]').hasText(serviceStub.description);
    assert.dom('[data-test-duration]').hasText(`1 minute`);
  });
});
