import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

import styles from './style'

export default class PostDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePost: []
        }
    }
    componentDidMount() {
        axios.get('http://reduxblog.herokuapp.com/api/posts/')
            .then((res) => {
                if (res.status == 200) {
                    console.log(res.data)
                    this.setState({
                        posts: res.data
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    static navigationOptions = {
        title: 'Articles    Add post',
        headerTitleStyle: styles.headerStyle,
        headerStyle: {
            backgroundColor: '#2C3E50'
        }
    };
    render() {
        return (
            <ScrollView contentContainerStyle={{flex:1}}>
                <FlatList
                    data={this.state.posts}
                    renderItem={({ item }) =>
                        <View style={styles.listitem}>
                            <Text style={styles.contentStyle}>Title: {item.title}</Text>
                            <Text style={styles.contentStyle}>Categories: {item.categories}</Text>
                            <Text style={styles.contentStyle}>description: {item.content}</Text>
                        </View>
                    }
                />             
            </ScrollView>
        )
    }
}
