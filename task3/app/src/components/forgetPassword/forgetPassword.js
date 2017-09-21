import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

import Signup from '../signup/signup'
import style from './style';
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'User Name',
            pasword: 'Password',
        };
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={style.Container}>
                <View style={style.logo}>
                    <Image
                        style={{ width: 120, height: 120 }}
                        source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/31505-200.png' }}
                    />
                    <Text style={style.Title}>Password Recovery</Text>
                </View>
                <View style={style.InputField}>
                    <TextInput
                        style={style.nameInput}
                        {...this.props}
                        editable={true}
                        placeholder="Email"
                        placeholderTextColor="gray"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 10,width:350 }} >
                        Enter Your email below to receive your password reset instruction
                    </Text>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>SEND</Text>
                    </TouchableOpacity >
                </View>
            </View>

        )
    }
}