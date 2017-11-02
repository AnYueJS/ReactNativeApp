/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';
import MyHomeScreen from './mine/home';
import MyAccountScreen from './account';
import MyProductScreen from './product/productLabel';
import MyProuctListScreen from './product/productList';
import MyProuctDetailScreen from './product/productDetail';
import MyHouseListScreen from './house/houseList';
import MyHouseDetailScreen from './house/houseDetail'


const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <SampleText>{banner}</SampleText>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
        title="Open profile screen"
      />
      <Button
        onPress={() => navigation.navigate('NotifSettings')}
        title="Open notifications screen"
      />
      <Button
        onPress={() => navigation.navigate('SettingsTab')}
        title="Go to settings tab"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </SafeAreaView>
  </ScrollView>
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);



const TabNav = TabNavigator(
  {
    MainTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: '首页'
      },
    },
    ProductTab: {
      screen: MyProductScreen,
      path: '/product',
      navigationOptions: {
        title: 'product',
        tabBarLabel: '产品'
      },
    },
    HouseTab: {
      screen: MyHouseListScreen,
      path: '/house',
      navigationOptions: {
        title: 'house',
        tabBarLabel: '房产'
      },
    },
    SettingsTab: {
      screen: MyAccountScreen,
      path: '/account',
      navigationOptions: {
        title: 'mine',
        tabBarLabel: '我的'
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!`;
    },
  },
  ProductList: {
    screen: MyProuctListScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!!`;
    },
  },
  ProductDetail: {
    screen: MyProuctDetailScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!!`;
    },
  },
  HouseList: {
    screen: MyHouseListScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!!`;
    },
  },
  HouseDetail: {
    screen: MyHouseDetailScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!!`;
    },
  },
});

export default StacksOverTabs;
