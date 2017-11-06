/**
 * @flow
 */

import React from 'react';
import {
  Button,
  ScrollView,
  AppRegistry,
  StyleSheet,
  Text,
  View } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from '../../../SampleText';


const MyHomeScreen = ({ navigation }) => (
  <Welcome></Welcome>
);

const Welcome = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My FirstApp!
        </Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MyHomeScreen;
