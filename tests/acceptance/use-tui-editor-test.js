import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'reproduce-ember-tui-editor-acceptance-testing-issue/tests/helpers';
import { fillInEditor } from 'ember-tui-editor/test-support/helpers';

module('Acceptance | use tui editor', function (hooks) {
  setupApplicationTest(hooks);

  test('acceptance testing ember-tui-editor', async function (assert) {
    await visit('/');
    await fillInEditor('[data-test-editor]', 'bar');
    assert.dom('[data-test-value]').hasText('bar');
  });
});
