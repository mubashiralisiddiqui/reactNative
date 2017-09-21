import React from 'react';
import { Modal, Text, Image, TouchableOpacity,View } from 'react-native'
import styles from './style'

class ImageModal extends React.Component {
    render() {

        return (
            <Modal
                style={styles.modalStyle}
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => thi.props.closeModal}
            >
                <View style={styles.content}>
                    <TouchableOpacity onPress={this.props.closeModal}style={styles.backButton}>
                        <Text style={styles.buttonTextStyle}> Go Back </Text>
                    </TouchableOpacity>
                    <Text style={{textAlign:'center'}}>Zoom View</Text>
                    <Image
                        style={{ flex:1 }}
                        source={{ uri: this.props.imageUrl.toString() }}
                    />
                </View>
            </Modal>
        )
    }
}
export default ImageModal