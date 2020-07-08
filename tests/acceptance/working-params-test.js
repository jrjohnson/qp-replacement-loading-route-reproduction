import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | working params', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /broken', async function(assert) {
    await visit('/broken/1?first=true');
    assert.equal(currentURL(), '/broken/1?first=true');
    await click('button:nth-of-type(2)');
    assert.equal(currentURL(), '/broken/1?first=true&second=true');
  });

  test('clicking /broken', async function(assert) {
    await visit('/broken/1');
    assert.equal(currentURL(), '/broken/1');
    await click('button:nth-of-type(2)');
    assert.equal(currentURL(), '/broken/1?second=true');
    await click('button:nth-of-type(1)');
    assert.equal(currentURL(), '/broken/1?first=true&second=true');
  });
});
