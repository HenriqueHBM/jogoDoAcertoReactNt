import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/interfaces/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";

function StartGameScreen({onPickNumber}) {
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chooseNumber = parseInt(enteredNumber);

        if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99){
            Alert.alert(
                'Número Inválido',
                'O número deve ser entre 1 e 99',
                    [{text: 'Ok', style:'destructive', onPress:resetInputHandler} ]
            );
            return ;
        }

        onPickNumber(chooseNumber);
        
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
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>

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
        borderColor: Colors.amarelinho,
        borderBottomWidth:2,
        color: Colors.amarelinho,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom:0
    },
    buttonsContainer:{
        flexDirection:'row'
    }
});