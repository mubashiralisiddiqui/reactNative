import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Addpost from '../../components/addPost/addPost'
import { PostList } from '../../components'
import styles from './style'

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Articles    Add post',
        headerTitleStyle: styles.headerStyle,
        headerStyle: {
            backgroundColor: '#2C3E50'
        }
    };
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <PostList navigate={navigate} />
            </View>
        )
    }
}
