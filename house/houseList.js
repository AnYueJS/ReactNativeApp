/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from '../SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <SampleText>{banner}</SampleText>
      <Button
        onPress={() => navigation.navigate('HouseDetail', { name: 'Jordan' })}
        title="我是房产列表页"
      />
    </SafeAreaView>
  </ScrollView>
);

const MyHouseListScreen = ({ navigation }) => (
  <MyNavScreen banner="product Screen" navigation={navigation} />
);

export default MyHouseListScreen;
