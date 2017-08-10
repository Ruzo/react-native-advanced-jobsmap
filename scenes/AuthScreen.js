import React, {Component} from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { logIntoFacebook } from '../actions';

class AuthScreen extends Component {

  componentWillMount(){
    this.props.logIntoFacebook();
  }

  componentWillReceiveProps({token}){
    token ? this.onAuthComplete(token) : null;
  }

  onAuthComplete(token){
    console.log(this.props);
    if(token){
      this.props.navigation.navigate('Map');
    }
  }

  render(){
    return (
      <View style={{flex: 1, marginTop: 40}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Logging in...</Text>
      </View>
    )
  }
}

function mapStateToProps({ auth }){
  console.log(auth);
  return {token: auth.fb_token} 
};

export default connect( mapStateToProps, { logIntoFacebook } )( AuthScreen );