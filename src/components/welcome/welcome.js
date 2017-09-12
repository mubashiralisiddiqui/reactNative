import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableHighlight } from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log("==>welcome", this.props.navigation)
        this.state = {
            username: 'User Name',
            pasword: 'Password'
        };
    }

    render() {
        const style = {
            text: {
                fontSize: 25,
                textAlign: 'center',
                fontFamily: 'Courier New'
            },
            KittenText: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 25,
                textAlign: 'center',
                fontFamily: 'Courier New'
            }
            ,
            Container: {
                display: 'flex',
                height: 300,

                alignItems: 'center'
            },
            item: {
                width: 250,
                height: 100,
                margin: 'auto',
                textAlign: 'center',
                marginTop:-5
            },
            nameInput: {
                padding: 10,
                height: 40,
                borderRadius: 16,
                borderWidth: 2,
                borderColor: 'black',
            },
            PasswordInput: {
                marginTop: 10,
                padding: 10,
                height: 40,
                borderRadius: 16,
                borderWidth: 2,
                borderColor: 'black',
            },
            button: {
                width: 245,
                height: 40,
                color: '#fff',
                textAlign: 'center',
                backgroundColor: 'rgb(221, 64, 6)',
                borderRadius: 10,
                textAlign: 'center',
                paddingTop: 'auto'
            },
            buttonText:{
                color: '#fff',
                textAlign: 'center',
                marginTop:8
            },
            image: {
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between'
            }
        }
        return (
            <View style={style.Container}>
                <Image
                    style={{ width: 150, height: 150 }}
                    source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/31505-200.png' }}

                />
                <View style={style.item}>
                    <Text style={style.text}>React Native</Text>
                    <Text style={style.KittenText}>UI Kitten</Text>
                </View>
                <View style={style.item}>
                    <TextInput
                        style={style.nameInput}
                        {...this.props}
                        editable={true}
                        value={this.state.username}
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({ username })}
                    //maxLength={40}
                    />
                    <View style={style.item}>
                        <TextInput
                            style={style.PasswordInput}
                            {...this.props}
                            editable={true}
                            value={this.state.pasword}
                            underlineColorAndroid='transparent'
                            onChangeText={(pasword) => this.setState({ pasword })}
                        //maxLength={40}
                        />
                    </View>


                </View>
                <View style={style.item}>
                    <TouchableHighlight style={style.button}>
                        <Text style={style.buttonText}>LOGIN</Text>
                    </TouchableHighlight>
                </View>
                <View style={style.item}>
                    <View style={style.image}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: 'https://image.freepik.com/free-icon/facebook-letter-logo_318-40258.jpg' }}
                        />
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: 'http://cdn.mysitemyway.com/icons-watermarks/simple-black/alphanum/alphanum_uppercase-letter-g/alphanum_uppercase-letter-g_simple-black_128x128.png' }}
                        />
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: 'data:image/png;base64,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' }}
                        />
                    </View>
                    <View />
                    <View style={style.item}>
                        <Text style={{marginTop:5}}> Dont have an account ? signup now !..</Text>
                    </View>
                </View>
            </View>
        )
    }
}