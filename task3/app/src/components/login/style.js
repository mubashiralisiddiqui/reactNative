const style = {
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center'
    },
    logo: {
        alignItems: 'center',
        marginBottom:-30
    },
    InputField: {
        width: 360,
        height: 220,
        marginTop: 25,
        marginTop: 35,
    },
    nameInputITem: {
        width: 360,
        height: 50,
        marginTop: 5,
        marginTop: 135,
    }, 
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Courier New',
    },
    subTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 33,
        textAlign: 'center',
        fontFamily: 'Courier New'
    },
    nameInput: {
        padding: 10,
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#d6d7da',
        marginTop: 10
    },
    button: {
        height: 45,
        backgroundColor: 'rgb(221, 64, 6)',
        borderRadius: 30,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 20
    },
    socialIconContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginLeft:20,
        justifyContent: 'space-around',
        marginBottom:-10
    }, 
    icons:{
        width: 70,
        height: 60,
        borderRadius: 30,
        borderWidth:1,
        borderColor:'#D3D3D3',
        marginLeft:40,  
    }, 
    askForAccount: {
        flexDirection:'row',
        justifyContent:'center',
        //  marginBottom:20
        marginTop:10
    }
}
export default style;




// //signup() {
//     let obj = {
//         name: this.state.username,
//         pasword: this.state.pasword
//     }
//     let userArray=[]
//     userArray.push(obj)
//     console.log("all user",userArray)
//     this.setState({users:userArray})
   
//     AsyncStorage.setItem('users', JSON.stringify(this.state.users)).then(() => {
//         console.log("success")
//         this.setState({ animating: true })
//             this.props.navigation.navigate('LoginScreen')
//             ToastAndroid.show('SIGNUP SUCCESSFUL !', ToastAndroid.SHORT);
//             this.setState({ animating: false })
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }