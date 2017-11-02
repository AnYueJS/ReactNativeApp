/**
 * @flow
 */

import React from 'react';
import { Button,
  ScrollView ,
  AppRegistry,
  StyleSheet,
  Text,
  View} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from '../SampleText';


const MyProuctDetailScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <SampleText>{banner}</SampleText>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
        title="我是产品详情页"
      />
    </SafeAreaView>
  </ScrollView>
);

export default MyProuctDetailScreen;
