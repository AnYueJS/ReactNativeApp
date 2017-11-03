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
import SampleText from '../../../SampleText';


const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <SampleText>{banner}</SampleText>
      <Button
        onPress={() => navigation.navigate('ProductList', { name: 'Jordan' })}
        title="我是产品标签页"
      />
    </SafeAreaView>
  </ScrollView>
);

const MyProductScreen = ({ navigation }) => (
  <MyNavScreen banner="product Screen" navigation={navigation} />
);

export default MyProductScreen;
