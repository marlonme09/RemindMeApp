/**
* IntroScreen
*
**/

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-native-navigation';
import IntroScreen from './screens/IntroScreen';
import TasksScreen from './screens/TasksScreen';



//Screens
const ScreenStack = StackNavigator(
  {
  Home: { screen: IntroScreen },
  Tasks: { screen: TasksScreen }
  },
  {
    headerMode: 'none'
  }
);

export default class App extends Component<Props> {
  render(){
    return <ScreenStack/>
  }
}
