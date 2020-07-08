import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | broken/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:broken/index');
    assert.ok(route);
  });
});
