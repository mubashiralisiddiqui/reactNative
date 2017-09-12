
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { AppHeader, AppForm } from '../components';
import Welcome from '../components/welcome/welcome';


export default class App extends Component {
  static navigationOptions={
    header:null
}
  render() {
   const { navigate } = this.props.navigation

    return (
        <View>
         <AppHeader/>
         <AppForm welcomNav={()=>navigate('WelcomeScreen')}/>

        </View>
    );
  }
}


