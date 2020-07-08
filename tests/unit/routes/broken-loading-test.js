import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | broken-loading', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:broken-loading');
    assert.ok(route);
  });
});
