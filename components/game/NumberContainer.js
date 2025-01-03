import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.amarelinho,
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:'center'
    },
    numberText:{
        fontFamily: 'open-sans',
        color: Colors.amarelinho,
        fontSize:36,
        fontWeight:'bold'
    }
});