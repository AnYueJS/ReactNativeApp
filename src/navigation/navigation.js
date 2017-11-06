/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import MyHomeScreen from '../components/dashboard/home';
import MyAccountScreen from '../components/mine/account';
import MyProductScreen from '../components/product/productLabel';
import MyProuctListScreen from '../components/product/productList';
import MyProuctDetailScreen from '../components/product/productDetail';
import MyHouseListScreen from '../components/house/houseList';
import MyHouseDetailScreen from '../components/house/houseDetail';
import LoginScreen from '../../login';
import SignupScreen from '../../signup'


const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
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
        title: '产品列表',
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

const LoginTabs = StackNavigator({
  Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
  },
  Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null
      }
  },
  App: {
     screen: TabNav
  },
  StacksOverTabs: {
     screen: StacksOverTabs
  }
},
{
  initialRouteName: 'Login',
  mode: 'card',
  headerMode: 'none',
});

export default StacksOverTabs;
