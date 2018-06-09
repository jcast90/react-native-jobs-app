import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from './Screens/AuthScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import MapScreen from './Screens/MapScreen';
import ReviewScreen from './Screens/ReviewScreen';
import SettingsScreen from './Screens/SettingsScreen';
import DeckScreen from './Screens/DeckScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      auth: AuthScreen,
      main: createBottomTabNavigator({
        map: MapScreen,
        deck: DeckScreen,
        review: createStackNavigator({
          review: ReviewScreen,
          settings: SettingsScreen
        })
      })
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
