import EmberRouter from '@ember/routing/router';
import config from 'reproduce-ember-tui-editor-acceptance-testing-issue/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
