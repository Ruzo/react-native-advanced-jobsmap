import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

const SLIDES_DATA = [
  {text: 'Welcome to JobsMap!', color: '#189BA3'},
  {text: 'Set your location and', color: '#005397'},
  {text: 'slide job-card right to save it,', color: '#FF4C06'},
  {text: 'or slide job-card left to skip it.', color: '#EEB200'}
];

const SCREEN_WIDTH = Dimensions.get('window').width;

const Slides = ({ handleButton }) => {
  const doneButton = (index) => {
    const button = (<Button
      title = "LET'S FIND A JOB!"
      raised
      large
      buttonStyle = { styles.button }
      onPress = { handleButton }
    />);
    return index == SLIDES_DATA.length - 1 ? button : null;
  }
  return (
    <ScrollView
      horizontal
      pagingEnabled
      style = {{ flex: 1 }}
    >
      { SLIDES_DATA.map( (slide, index) => 
          <View
            key = {slide.text}
            style = {[ styles.slide, { backgroundColor: slide.color } ]}
          >
            <Text
              style = { styles.text }
            >
              { slide.text }
            </Text>
            { doneButton(index) }
          </View>
        )
      }
    </ScrollView>
  )
}
export default Slides;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  button: {
    backgroundColor: SLIDES_DATA[0].color
  }
});