import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/screens/app'
import Navigations from './src/AppNavigation/appNavigation';

AppRegistry.registerComponent('app', () => Navigations);
