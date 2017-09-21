import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        color: 'white',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    container:{
        display:'flex',
        flex:1,
        flexDirection:'column'
    },
    form:{
        flex:1,
       flexDirection:'column',
        margin:'auto',
        alignItems:'center',
        marginTop:100
    },
    content:{
        borderRadius:10,
        marginTop:10,
        width:300,
        height:60,
    },
    texInput:{
        borderRadius:10,
        marginTop:10,
        width:300,
        height:40,
    },
    button:{
        width:120,
        marginLeft:230,
        marginTop:20,
        flexDirection:'row',
        alignContent:'center',
        height:30,
        paddingLeft:30,
        borderRadius:5,
        backgroundColor:'#48C9B0',
        marginRight:200
    }
})
export default styles;