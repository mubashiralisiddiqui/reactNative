import React from 'react';

import { View, TextInput, Text,TouchableHighlight,Image,Button } from 'react-native';

export default class AppForm extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = { text: 'enter some text' };
     console.log('passing props to form',this.props)
    }

    render() {
        const style = {
            view: {
                marginTop: 100
            },
            text: {
                fontSize: 20,
                textAlign:"center",
                color:'blue'
            },
            textinput: {
                borderRadius: 10,
                height: 40,
            },
            buttonStyle:{
               marginTop:50
            }
           
        }   
        return (
            <View style={style.view}>
                <Text style={style.text}>Please Fill This Form</Text>
                <TextInput
                    style={style.textinput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <View style={style.buttonStyle}>
               <Button  title ='submit' onPress={this.props.welcomNav}/>
               </View>
                
            </View>
        )

    }
}
