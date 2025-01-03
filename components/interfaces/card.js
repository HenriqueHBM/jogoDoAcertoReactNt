import { StyleSheet, View } from "react-native";

function Card({children}){
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginVertical: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#5D1A36',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        justifyContent:'center',
        alignItems:'center'
    }
});