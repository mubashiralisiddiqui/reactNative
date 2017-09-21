import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    listitem: {
        display:'flex',
        flexDirection:'row',
        borderWidth: 0.5,
        borderColor: 'gray',
        height: 50,
    },
    contentStyle: {
        color: "black",
        fontSize:20,
       marginLeft:30,
       paddingBottom:50
    },
    button: {
        width: 120,
        marginTop: 5,
        marginBottom:5,
        flexDirection: 'row',
        alignContent: 'flex-start',
        height: 30,
        borderRadius: 5,
        backgroundColor: '#48C9B0',
        marginRight: 200
    }
})
export default styles;