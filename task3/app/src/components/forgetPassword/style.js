const style = {
    Container: {
        display: 'flex',
        felxDirection:'column',
        alignItems: 'center',
        alignContent: 'center'
    },
    item: {
        margin: 'auto',
        marginTop: 5,
    },
    logo:{
     alignItems:'center',
     marginBottom:-100,
    },
    Title: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 33,
        textAlign: 'center',
        fontFamily: 'Courier New'
    },
    InputField: {
        width: 360,
        height: 220,
        marginTop: 70,
        
    },
    nameInput: {
        padding: 10,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'gray',
        marginTop: 100
    },
    button: {
        height: 45,
        backgroundColor: 'rgb(221, 64, 6)',
        borderRadius: 30,
        marginTop: 100
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
    socialIcons: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
}
export default style;