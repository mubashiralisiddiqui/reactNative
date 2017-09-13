import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

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
        const style = {
            Container: {
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                alignContent: 'center'
            },
            item: {
                width: 360,
                height: 50,
                margin: 'auto',
                textAlign: 'center',
                marginTop: 5,
            },
            imageItem: {
                width: 250,
                height: 120,
                textAlign: 'center',
                alignItems: 'center',
            },
            textItem: {
                fontSize: 25,
                textAlign: 'center',
                width: 250,
                height: 36,
                borderColor: '#d6d7da',
            },
            nameInputITem: {
                width: 360,
                height: 50,
                marginTop: 5,
                textAlign: 'center',
                marginTop: 35,
            },
            passwordInputITem: {
                width: 360,
                height: 50,
                marginTop: 15,
                textAlign: 'center',
            },
            buttonItem: {
                width: 360,
                height: 50,
                margin: 'auto',
                textAlign: 'center',
                marginTop: 20,
            },
            socialITem: {
                width: 360,
                height: 100,
                margin: 'auto',
                textAlign: 'center',
                marginTop: 5,
                justifyContent:'space-between',
               alignItems:'center',
               alignContent:'center'
            },
            text: {
                fontSize: 25,
                textAlign: 'center',
                fontFamily: 'Courier New',
                textAlign: 'center',
            },
            KittenText: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 33,
                textAlign: 'center',
                fontFamily: 'Courier New'
            },
            nameInput: {
                padding: 10,
                height: 50,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: '#d6d7da',
            },
            button: {
                width: 360,
                height: 45,
                color: '#fff',
                textAlign: 'center',
                backgroundColor: 'rgb(221, 64, 6)',
                borderRadius: 30,
                textAlign: 'center',
                paddingTop: 'auto'
            },
            buttonText: {
                color: '#fff',
                textAlign: 'center',
                marginTop: 8,
                fontSize:20
            },
            image: {
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
            },
            facebk: {
                borderRadius: 100,
                width: 70,
                height: 70,
                marginLeft:50,
                borderColor: '#d6d7da',
                borderWidth:1.5
               
            },
            gmail:{
                borderRadius: 100,
                width: 70,
                height: 70,
                marginLeft:50,
                borderColor: '#d6d7da',
                borderWidth:1.5
            },
            twitter:{  
                borderRadius: 100,
                width: 70,
                height: 70,
                borderColor: '#d6d7da',
                borderWidth:1.5
            },
            accountItem:{
                width: 360,
                height: 50,
                margin: 'auto',
                textAlign: 'center',
                marginTop: 5,
               alignItems:'center',
            }
        }
        return (
            <View style={style.Container}>
                <View style={style.imageItem}>
                    <Image
                        style={{ width: 120, height: 120 }}
                        source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/31505-200.png' }}
                    />
                </View>
                <View style={style.textItem}>
                    <Text style={style.text}>React Native</Text>
                </View>
                <View style={style.textItem}>
                    <Text style={style.KittenText}>UI Kitten</Text>
                </View>
                <View style={style.nameInputITem}>
                    <TextInput
                        style={style.nameInput}
                        {...this.props}
                        editable={true}
                        placeholder ="Name"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({ username })}
                    //maxLength={40}
                    />
                </View>
                <View style={style.passwordInputITem}>
                    <TextInput
                        style={style.nameInput}
                        {...this.props}
                        editable={true}
                        placeholder ="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(pasword) => this.setState({ pasword })}
                    />
                </View>
                <View style={style.buttonItem}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>LOGIN</Text>
                    </TouchableOpacity >
                </View>
                <View style={style.socialITem}>
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
                        <Text style={{ marginTop: 5,fontSize:16 }}> Dont Have An Account ?<Text style={{fontWeight:'bold', color:'black',fontSize:16}}> Signup Now !</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
}