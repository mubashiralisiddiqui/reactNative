import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log("==>welcome", this.props.navigation)
        this.state = {
            username: 'User Name',
            pasword: 'Password'
        };
    }
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={style.Container}>
                <View>
                    <Image
                        style={{ width: 120, height: 120 }}
                        source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/31505-200.png' }}
                    />
                </View>
                <View>
                    <Text style={style.text}>React Native</Text>
                </View>
                <View >
                    <Text style={style.KittenText}>UI Kitten</Text>
                </View>
                <View style={style.nameInputITem}>
                    <TextInput
                        style={style.nameInput}
                        {...this.props}
                        editable={true}
                        placeholder="Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>
                <View style={style.passwordInputITem}>
                    <TextInput
                        style={style.nameInput}
                        {...this.props}
                        editable={true}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(pasword) => this.setState({ pasword })}
                    />
                </View>
                <View style={style.buttonItem}>
                    <TouchableOpacity style={style.button} onPress={() => navigate('UserProfile')}>
                        <Text style={style.buttonText}>LOGIN</Text>
                    </TouchableOpacity >
                </View>
                <View>
                    <View style={style.image}>
                        <TouchableOpacity >
                            <Image
                                style={style.facebk}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8Ed1pBiZppBpe-EaFPCkXeTga6CW367n3Dld89IeznfVH-kyeEOvteA' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image
                                style={style.gmail}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAn1yX5SKPQK91Vddb03gN8poRKKaea-7hR6ZdkQmwa2frgSrH' }}
                            />
                        </TouchableOpacity >
                        <TouchableOpacity >
                            <Image
                                style={style.twitter}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73_kc4hKnABULErHXnUK2Pcty3qVhOZUX6vmlQz9M2tWZ8C7xWA' }}
                            />
                        </TouchableOpacity >
                    </View>
                    <View />
                    <View style={style.accountItem}>
                        <Text style={{ marginTop: 5, fontSize: 16 }}> Dont Have An Account ?<Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}> Signup Now !</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
}