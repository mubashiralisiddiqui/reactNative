import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

import styles from './style'

export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            content: ''
        }
    }
    static navigationOptions = {
        title: 'Articles    Add post',
        headerTitleStyle: styles.headerStyle,
        headerStyle: {
            backgroundColor: '#2C3E50'
        }
    };
   onFormSubmit() {
        const {navigate}=this.props.navigation
        let postDetail = {
            title: this.state.title,
            categories: this.state.category,
            content: this.state.content
        }
        axios.post('http://reduxblog.herokuapp.com/api/posts',postDetail )

        .then((res)=>{
           if(res.status==="201"){
               console.log("succesfull posted")
           }
        })
        .catch((err)=>{
            console.log(err)
        })
       this.setState({
           title:'',
           description:'',
           category:'',
           content:''
       })
       alert("posted succsessfully")
       navigate('AppScreen')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={{textAlign:'center',color:'#2980B9',fontSize:30}}>CREATE POST</Text>
                    <TextInput
                        style={styles.texInput}
                        editable={true}
                        value={this.state.title}
                        placeholder="Title"
                        placeholderTextColor="#2980B9"
                        underlineColorAndroid='#2980B9'
                        onChangeText={(title) => this.setState({ title })}
                    />      
                    <TextInput
                        style={styles.texInput}
                        editable={true}
                        value={this.state.category}
                        placeholder="category"
                        placeholderTextColor="#2980B9"
                        underlineColorAndroid='#2980B9'
                        onChangeText={(category) => this.setState({ category })}
                    />
                    <TextInput
                        style={styles.content}
                        editable={true}
                        placeholder="Content"
                        value={this.state.content}
                        placeholderTextColor="#2980B9"
                        underlineColorAndroid='#2980B9'
                        onChangeText={(content) => this.setState({ content })}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => this.onFormSubmit()}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#2980B9' }}>Add Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
