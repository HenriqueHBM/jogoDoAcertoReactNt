import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Ola');

    }
    return (
        <View style={styles.buttonOuterContainer}>
            {/* {pressed} é um obj que retorna true ou false quando apertado */}
            <Pressable style={({ pressed }) =>
                pressed 
                ? [styles.buttonInnercontainer, styles.pressed] 
                : styles.buttonInnercontainer
            } onPress={pressHandler} android_ripple={{ color: "#5B1A35" }}>
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
        backgroundColor: '#7B1A32',
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