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
    title:{
        width:300,
        height:30,
        textAlign:'center',
        margin:'auto'
    }
})
export default styles;