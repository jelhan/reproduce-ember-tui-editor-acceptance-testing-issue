import Application from 'reproduce-ember-tui-editor-acceptance-testing-issue/app';
import config from 'reproduce-ember-tui-editor-acceptance-testing-issue/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
