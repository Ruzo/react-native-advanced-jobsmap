import { Platform } from 'react-native';

import WelcomeScreen from './WelcomeScreen';
import AuthScreen from './AuthScreen';
import MapScreen from './MapScreen';
import DeckScreen from './DeckScreen';
import ReviewScreen from './ReviewScreen';
import SettingsScreen from './SettingsScreen';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

const androidFixes = Platform.OS === 'android'
  ? {
      swipeEnabled: false,
      animationEnabled: false
    }
  : {};

const reviewNav = StackNavigator({
  Review: {screen: ReviewScreen},
  Settings: {screen: SettingsScreen},
});

const mainNav = TabNavigator({
  Map: {screen: MapScreen},
  Deck: {screen: DeckScreen},
  Review: { screen: reviewNav }
}, {
    tabBarPosition: 'bottom',
    ...androidFixes,
    tabBarOptions: {
      style: {backgroundColor: 'white'},
      labelStyle: { color: 'black'}
    }
  }
);

export default Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Auth: { screen: AuthScreen },
  Main: { screen: mainNav },
},{
    tabBarPosition: 'bottom',
    ...androidFixes,
    lazy: true,
    tabBarOptions: {
      style: {backgroundColor: 'white'},
      labelStyle: { color: 'black'}
    },
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
