import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableOpacity, ScrollView, Container, Modal, TouchableHighlight } from 'react-native';

import ImageModal from '../model/model';
import images from './collection'
import styles from './style';
export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            imageUrl: ''
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    static navigationOptions = {
        title: 'USER PROFILE',
        headerTitleStyle: styles.headerStyle,
    };
    closeModal() {
        this.setState({
            modalVisible: false
        })
        alert("Modal has been closed.")
    }
    onImageClick(url) {
        this.setState({
            imageUrl: url,
            modalVisible: !this.state.modalVisible
        })
    }
    render() {
        return (
            <View Style={styles.Container}>
                <ScrollView>
                    <ImageModal
                        modalVisible={this.state.modalVisible}
                        imageUrl={this.state.imageUrl}
                        closeModal={() => this.closeModal()}
                    />
                    <View style={styles.imageItem}>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIp6ER9IdJSX9FDLnGEz4VwYCG5xgSawa6ek0xB_RbCQhyRsBH" }}
                        />
                        <Text style={styles.imageText}>Helen Gilbert</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>FOLLOW</Text>
                        </TouchableOpacity >
                    </View>
                    <View style={styles.aboutUser1}>
                        <Text style={styles.galleryTextTitle}>86</Text>
                        <Text style={styles.galleryTextTitle}>22.1k</Text>
                        <Text style={styles.galleryTextTitle}>536</Text>
                    </View>
                    <View style={styles.aboutUser}>
                        <Text style={styles.galleryText}>Posts</Text>
                        <Text style={styles.galleryText}>Followers</Text>
                        <Text style={styles.galleryText}>Following</Text>
                    </View>
                    <View style={styles.gallery}>
                        {images.map((v, i) => {
                            return (
                                <TouchableHighlight onPress={(uri) => this.onImageClick(v.toString())} key={i}>
                                    <Image
                                        style={styles.galleryImages}
                                        source={{ uri: v.toString() }}
                                    />
                                </TouchableHighlight>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>

        )
    }
}