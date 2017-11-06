/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import { AsyncStorage, AppRegistry,View, Text, Button } from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import StacksOverTabs from './src/navigation/navigation';
 import Storage from 'react-native-storage';

 AppRegistry.registerComponent('MeiXinApp', () => StacksOverTabs);
