import React from 'react';
import { Image, View, Text, TextInput, Button, ToastAndroid, TouchableHighlight, TouchableOpacity, AsyncStorage } from 'react-native';

import UserProfile from '../userProfile/userProfile';
import AuthServices from '../../services/services'
import style from './style';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'User Name',
            pasword: 'Password',
            users: []
        };
    }
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        AsyncStorage.getItem('users', (err, user) => {
            this.setState({ users: JSON.parse(user) })
        })
    }
    login() {
        let obj = {
            name: this.state.username,
            pasword: this.state.pasword
        }
        let nav=this.props.navigation.navigate
        let users = this.state.users
        AuthServices.login(obj, nav, users)
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
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(pasword) => this.setState({ pasword })}
                    />
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText} onPress={() => this.login()}>LOGIN</Text>
                    </TouchableOpacity >
                </View>
                <View style={style.socialIconContainer}>
                    <TouchableOpacity >
                        <Image
                            style={style.icons}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8Ed1pBiZppBpe-EaFPCkXeTga6CW367n3Dld89IeznfVH-kyeEOvteA' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image
                            style={style.icons}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAn1yX5SKPQK91Vddb03gN8poRKKaea-7hR6ZdkQmwa2frgSrH' }}
                        />
                    </TouchableOpacity >
                    <TouchableOpacity >
                        <Image
                            style={style.icons}
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73_kc4hKnABULErHXnUK2Pcty3qVhOZUX6vmlQz9M2tWZ8C7xWA' }}
                        />
                    </TouchableOpacity >
                </View>
                <TouchableOpacity style={style.askForAccount} onPress={() => navigate('signupScreen')}>
                    <Text style={{ fontSize: 16, marginTop: 20 }}> Dont Have An Account ?<Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}> Signup Now !</Text></Text>
                </TouchableOpacity>
            </View>
        )
    }
}