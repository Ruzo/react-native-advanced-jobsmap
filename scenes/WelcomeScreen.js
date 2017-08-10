import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';

class WelcomeScreen extends Component {
  state = { showSlides: false };

  async componentDidMount(){
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('Map');
    }
    else {
      this.setState({ showSlides: true });
    }
  }

  handleButton = () => {
    this.props.navigation.navigate('Auth');
  }

  renderSlides() {
    return <Slides handleButton = { this.handleButton } />
  }

  render(){
    return (
      <View style={styles.container}>
        { this.state.showSlides ? this.renderSlides() : <AppLoading /> }
      </View>
    )
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})