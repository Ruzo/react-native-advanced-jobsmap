import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  TabNavigator
} from 'react-navigation';
import RouteConfigs from './scenes/route_configs';

export default class App extends React.Component {
  render() {
    const Navigator = RouteConfigs;
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
