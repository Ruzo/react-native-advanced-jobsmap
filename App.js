import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  TabNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';

import Navigator from './scenes/route_configs';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <View style = { styles.container }>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
