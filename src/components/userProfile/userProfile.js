import React from 'react';
import { Image, View, Text, TextInput, Button, TouchableOpacity, ScrollView, Container, Modal, TouchableHighlight } from 'react-native';
import ImageModal from '../model/model';
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
        headerTitleStyle: {
            color: 'black',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'space-between',
            textAlign: 'center',
            paddingLeft: 80
        },
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
        const images = ["https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg",
            "https://i.pinimg.com/736x/08/0d/22/080d2246ca89633b1a47cda04ea455b4--birds-beautiful-wicked.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHoP4_S-ONks9eYSsEzBJuXGYm5PPE2GdA08ny0r2bQeRAaWEbA",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98hIOIY7KVegHx9sOAMpeuwx9POmWwWFCyq2ihrlsoy51t5OzjA",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98hIOIY7KVegHx9sOAMpeuwx9POmWwWFCyq2ihrlsoy51t5OzjA",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHoP4_S-ONks9eYSsEzBJuXGYm5PPE2GdA08ny0r2bQeRAaWEbA",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYTdxbBBiVFI9BpizlaggEoTPC_PtjrwoDmJO4gBc3PynuogKwJ1r8dI",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYTdxbBBiVFI9BpizlaggEoTPC_PtjrwoDmJO4gBc3PynuogKwJ1r8dI",
            "https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEYN8bYDaJCuYtezvzTAEjmqXyllbkd_6sFPE-32Y7HnROENflw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hSqRuVqiCIU6zkXBKakCc_hR_TYPW-RjwxIWTe_SKo44sd1gHQ",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8YGGxgPpOiqqnwwr3dUkNfuqexVpPtBD7fJOgQo2UkMLaRgT"

        ];
        return (

            <View Style={styles.Container}>
                <ScrollView>
                    {console.log("image url", this.state.imageUrl)}
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

                    <ScrollView contentContainerStyle={styles.gallery}>
                        {images.map((v, i) => {
                            console.log("images=====", v)
                            return (
                                <TouchableHighlight onPress={(uri) => this.onImageClick(v.toString())} key={i}>
                                    <Image
                                        style={styles.galleryImages}
                                        source={{ uri: v.toString() }}
                                    />
                                </TouchableHighlight>
                            )
                        })}



                    </ScrollView>
                </ScrollView>

            </View>

        )
    }
}