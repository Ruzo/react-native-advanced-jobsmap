import types from '../types';
import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';

export const logIntoFacebook = () => async dispatch => {
  let existingToken = await AsyncStorage.getItem('fb_token');
  if(!existingToken){
    console.log("Logging into Facebook!");
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('161394337765324', {
      permissions: ['public_profile']
    });

    if(type === 'success'){
      AsyncStorage.setItem('fb_token', token);
      dispatch({ type: types.FB_LOGGING_SUCCESS, payload: token });
    }
    else{
      AsyncStorage.setItem('fb_token', '');
      dispatch({ type: types.FB_LOGGING_FAIL});
    }
  }
  else{
    console.log("Found token!");
    dispatch({ type: types.FB_LOGGING_SUCCESS, payload: existingToken });
  }
}