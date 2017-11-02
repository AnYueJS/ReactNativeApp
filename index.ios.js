/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { AppRegistry,View, Text, Button } from 'react-native';
 import { StackNavigator } from 'react-navigation';

 import App from './product/test'
 import HomeScreen from './product/test1';
 import DetailsScreen from './product/test2';
 import RootTabs from './ivew/root';

AppRegistry.registerComponent('MeiXinApp', () => App);
