/**
 * Remind Me App
 * Remind App for iOS and Android
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import TasksScreen from './screens/TasksScreen';

//Or Export this...
export default App = StackNavigator(
  {
    Home: { screen: IntroScreen },
    Tasks: { screen: TasksScreen }
  },
  {
    headerMode: 'none'
  }
);

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: 'orange'
  }
});
