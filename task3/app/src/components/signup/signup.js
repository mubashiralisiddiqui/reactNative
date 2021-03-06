import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableHighlight, ToastAndroid, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';

import UserProfile from '../userProfile/userProfile';
import AuthServices from '../../services/services'
import style from './style';
let AllUser = []
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'User Name',
            pasword: 'Password',
            animating: false,
            users: []
        };
    }
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        AsyncStorage.getItem('users', (user) => {
            if (!user == null) {
                let users=[];
                users.push(JSON.parse(user))
                this.setState({users:user})
                AllUser.push(JSON.parse(user))
            }
        })
    }
    signup() {
        let nav=this.props.navigation.navigate
        let obj = {
            name: this.state.username,
            pasword: this.state.pasword
        }
        AuthServices.signup(obj,nav)
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={style.Container}>
                <View style={style.logo}>
                    <Image
                        style={{ width: 120, height: 120 }}
                        source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/31505-200.png' }}
                    />
                    <Text style={style.title}>React Native</Text>
                    <Text style={style.subTitle}>UI Kitten</Text>
                </View>
                <View style={style.InputField}>
                    <TextInput
                        style={style.nameInput}
                        editable={true}
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <TextInput
                        style={style.nameInput}
                        {...this.props}
                        editable={true}
                        type="password"
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(pasword) => this.setState({ pasword })}
                    />

                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText} onPress={() => this.signup()}>SIGNUP</Text>
                    </TouchableOpacity >
                </View>

                <TouchableOpacity style={style.askForAccount} onPress={() => navigate('LoginScreen')}>
                    <Text style={{ fontSize: 16, marginTop: 20 }}> Already Have An Account ?<Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>  Login !</Text></Text>
                </TouchableOpacity>
            </View>
        )
    }
}