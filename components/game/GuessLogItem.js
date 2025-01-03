import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Chute do Oponente: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.roxoEscuro,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.vermelinho,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation:4,
        
    },
    itemText:{
        fontFamily: 'open-sans',
        color: 'white'
    }
})