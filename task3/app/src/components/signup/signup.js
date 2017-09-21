import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import UserProfile from '../userProfile/userProfile';
import style from './style';
export default class Home extends React.Component {
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
                        underlineColorAndroid='transparent'
                        onChangeText={(pasword) => this.setState({ pasword })}
                    />
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>LOGIN</Text>
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
                <View style={style.askForAccount}>
                    <Text style={{ fontSize: 16 }}> Dont Have An Account ?<Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}> Signup Now !</Text></Text>
                </View>
            </View>
        )
    }
}