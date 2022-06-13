import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { fillInEditor } from 'ember-tui-editor/test-support/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Changeset } from 'ember-changeset';

module('Integration | Component | tui-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('onChange event is fired when user enters text', async function (assert) {
    let content = '';

    this.onChangeHandler = (text) => {
      console.log('onChangeHandler', text);
      content = text;
    };

    await render(hbs`
      <TuiEditor data-test-editor @onChange={{this.onChangeHandler}}  />
    `);

    await fillInEditor('[data-test-editor]', 'foo');

    assert.strictEqual(content, 'foo');
  });

  test('could be used with initial value', async function (assert) {
    this.content = 'foo';

    this.onChangeHandler = (text) => {
      console.log('onChangeHandler', text);
      this.set('content', text);
    };

    await render(hbs`
      <TuiEditor data-test-editor @onChange={{this.onChangeHandler}} @value={{this.content}} />
    `);

    await fillInEditor('[data-test-editor]', 'bar');

    assert.strictEqual(this.content, 'bar');
  });

  test('could be used together with ember-changeset', async function (assert) {
    this.changeset = new Changeset({
      text: 'foo',
    });

    this.onChangeHandler = (text) => {
      this.changeset.set('text', text);
    };

    await render(hbs`
      <TuiEditor data-test-editor @onChange={{this.onChangeHandler}} @value={{this.changset.text}} />
    `);

    await fillInEditor('[data-test-editor]', 'bar');

    assert.deepEqual(this.changeset.change, { text: 'bar' });
  });

  test('could be used together with Ember Bootstrap', async function (assert) {
    this.model = { text: 'foo' };

    this.onChangeHandler = (text) => {
      this.changeset.set('text', text);
    };

    await render(hbs`
      <BsForm @model={{this.model}} as |form|>
        <form.element @property="text" as |el|>
          <TuiEditor data-test-editor @onChange={{el.setValue}} @value={{el.value}} />
        </form.element>
      </BsForm>
    `);

    await fillInEditor('[data-test-editor]', 'bar');

    assert.deepEqual(this.model, { text: 'bar' });
  });

  test('could use a selector on BS form element', async function (assert) {
    this.model = { text: 'foo' };

    this.onChangeHandler = (text) => {
      this.changeset.set('text', text);
    };

    await render(hbs`
      <BsForm @model={{this.model}} as |form|>
        <form.element @property="text" data-test-form-element as |el|>
          <TuiEditor @onChange={{el.setValue}} @value={{el.value}} />
        </form.element>
      </BsForm>
    `);

    await fillInEditor('[data-test-form-element]', 'bar');

    assert.deepEqual(this.model, { text: 'bar' });
  });
});
