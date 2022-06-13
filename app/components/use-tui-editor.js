import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UseTuiEditorComponent extends Component {
  @tracked text = 'foo';

  @action
  onChangeHandler(text) {
    this.text = text;
  }
}
