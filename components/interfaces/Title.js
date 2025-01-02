import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        textAlign:'center',
        textTransform: 'uppercase',
        color: 'white',
        fontWeight:'bold',
        borderWidth:2,
        borderColor: 'white',
        padding:10
    }
});