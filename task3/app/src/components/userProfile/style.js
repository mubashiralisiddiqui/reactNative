import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    headerStyle: {
        color: 'black',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'space-between',
        textAlign: 'center',
        paddingLeft: 80
    },
    Container: {
        display: 'flex',
        flex: 1,
        alignContent: 'center'
    },
    scrollView: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    imageItem: {
        height: 210,
        marginTop: 30,
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    imageText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
        fontFamily: 'Courier New',
    },
    button: {
        width: 130,
        height: 35,
        backgroundColor: 'rgb(221, 64, 6)',
        borderRadius: 30,
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Courier New',
    },
    galleryItem: {
        width: 80,
        alignItems: 'center',
        marginBottom: 200,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    galleryTextTitle: {
        width: 125,
        margin: 'auto',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    galleryText: {
        width: 125,
        margin: 'auto',
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
    },
    aboutUser1: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row'
    },
    aboutUser: {
        display: 'flex',
        flexDirection: 'row'
    },
    gallery: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    galleryImages: {
        width: 125,
        height: 100,
        margin: 1
    }
})

export default styles;