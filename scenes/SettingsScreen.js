import React, {Component} from 'react';
import { View, Text } from 'react-native';

const SettingsScreen = () => (
  <View style={{marginTop: 40}}>
    <Text>SettingsScreen</Text>
    <Text>SettingsScreen</Text>
    <Text>SettingsScreen</Text>
    <Text>SettingsScreen</Text>
    <Text>SettingsScreen</Text>
    <Text>SettingsScreen</Text>
  </View>
)

SettingsScreen.navigationOptions = () => ({
  headerStyle: { marginTop: 20 }
});

export default SettingsScreen;