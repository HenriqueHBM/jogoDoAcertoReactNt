import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler(){
        
    }
    const [enteredNumber, setEnteredNumber] = useState('');
    return (
        <View style={styles.inputContainser}>
            <TextInput style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none" 
                autoCorrect={false} 
                value={enteredNumber} 
                onChangeText={numberInputHandler} 
            />
            <View style={styles.buttonsContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>

            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainser: {
        marginTop: 100,
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
    },
    numberInput:{
        height:50,
        width: 50,
        fontSize:32,
        borderColor: '#ddb52f',
        borderBottomWidth:2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom:0
    },
    buttonsContainer:{
        flexDirection:'row'
    }
});