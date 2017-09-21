import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Signup, AppHeader, AppForm, ImageModal, UserProfile, ForgetPassword } from '../components';
import styles from './style'
export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: 0,
      animating: false
    }
  }
  DisplayScreens() {
    switch (this.state.screens) {
      case 0:
        return <Signup />
        break;
      case 1:
        return <UserProfile animating={this.state.animating} />
        break;
      case 2:
        return <ForgetPassword />
      case 3:
        this.setState({ screens: 0 })
        break;
    }
  }
  toggleScreens() {
    this.setState({
      screens: this.state.screens + 1,
      animating: true
    })
    setTimeout(() => this.setState({ animating: false }), 1000)
  }
  render() {
    if(this.state.animating) {
      return (
        <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator
            animating={true}
            color='#bc2b78'
            size="large"
          />
        </View> 
      )
    }
    return (
      <View>
        <Button title='Next' onPress={() => this.toggleScreens()}/>
        {this.DisplayScreens()}
      </View>
    );
  }
}



