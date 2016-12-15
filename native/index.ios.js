import React, { Componenet } from 'react';
import { AppRegistry } from 'react-native';
import Main from './app/containers/main';

// the first argument must match the app name.
AppRegistry.registerComponent('native', () => Main);
