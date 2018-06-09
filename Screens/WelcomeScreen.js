import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../Components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03a9f4'},
  { text: 'Use this to get a job', color: '#009688'},
  { text: 'Set your location, then swipe away', color: '#03a9f4'}
]

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <View>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}></Slides>   
      </View>   
    )
  }
}

export default WelcomeScreen;