/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootApp from './RootApp';

import {render} from 'react-native-android-auto';

AppRegistry.registerRunnable('androidAuto', () => {
  render(React.createElement(RootApp));
});

AppRegistry.registerComponent(appName, () => App);
