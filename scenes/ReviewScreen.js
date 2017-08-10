import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationNavigator } from 'react-navigation';

const ReviewScreen = () => (
  <View style={{marginTop: 40}}>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
  </View>
)

ReviewScreen.navigationOptions = ({navigation}) => ({
  title: 'Review',
  headerRight: <Button
    title = 'Settings'
    onPress = {() => navigation.navigate('Settings')}
    backgroundColor = 'rgba(0, 0, 0, 0)'
    color = 'rgba(0, 122, 255, 1)'
  />,
  headerStyle: {marginTop: 20},
});

export default ReviewScreen;