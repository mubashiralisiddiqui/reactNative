import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ContentAdd from 'material-ui/svg-icons/content/add';

import styles from './style'

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('	http://reduxblog.herokuapp.com/api/posts')
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
            <ScrollView contentContainerStyle={styles.container}>
                <FlatList
                    data={this.state.posts}
                    renderItem={({ item, key }) =>
                        <View style={styles.listitem}>
                            <TouchableOpacity onPress={() => this.props.navigate('PostDetail')}>
                            <Image
                            style={{width:20,height:20,borderRadius:100}}
                            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYyDnLIGZ5QBtSrxzQ-0WHOi1xGJdjdZkkS68oFl__xTdKPkp'}}
                          />
                                <Text style={styles.contentStyle}>Title: {item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigate('FormScreen')} />
            </ScrollView>
        )
    }
}
