import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import searchScreen from '../screens/searchScreen'
import bookTransactionscreen from '../screens/bookTransactionscreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createAppContainer} from 'react-navigation'
export default class  App extends React.Component {
 render() {
  return (
  <AppContainer/>  
    
  );
}
}
const TabNavigator = createBottomTabNavigator ({
  transaction: {
    screen: bookTransactionscreen
  },
  search: {
    screen: searchScreen 
  }
})
const AppContainer = createAppContainer (TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
