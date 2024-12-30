import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            {/* {pressed} é um obj que retorna true ou false quando apertado */}
            <Pressable style={({ pressed }) =>
                pressed 
                ? [styles.buttonInnercontainer, styles.pressed] 
                : styles.buttonInnercontainer
            } onPress={onPress} android_ripple={{ color: Colors.roxoEscuro }}>
                <Text style={styles.buttonText}> {children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        flex:1
    },
    buttonInnercontainer: {
        backgroundColor: Colors.vermelinho,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
});