import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions'

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
    console.log('fb logging: ', this.props)
    AsyncStorage.removeItem('fb_token')
  }

  componentWillReceiveProps(nextProps) {
    console.log('will recieved: ', nextProps)
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    console.log('completed', props)
    if (props.token) {
      console.log('true: ',props.token)
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    )
  };
}

function mapStateToProps({ auth }) {
  return { token: auth.token }
}
export default connect(mapStateToProps, actions)(AuthScreen);