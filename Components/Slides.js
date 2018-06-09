import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />

      )
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}
const styles = {
  container: {
    flex: 1
  },
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288d1',
    marginTop: 15
  }
}

export default Slides;