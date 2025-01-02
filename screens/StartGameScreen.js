import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/interfaces/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/interfaces/Title";
import Card from "../components/interfaces/card";
import InstructionText from "../components/interfaces/InstructionText";

function StartGameScreen({ onPickNumber }) {
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const chooseNumber = parseInt(enteredNumber);

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(
                'Número Inválido',
                'O número deve ser entre 1 e 99',
                [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(chooseNumber);

    }
    const [enteredNumber, setEnteredNumber] = useState('');
    return (
        <View style={styles.rootContainer}>
            <Title>Acerte Meu Número</Title>
            <Card>
                <InstructionText>Insira um Número</InstructionText>
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
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderColor: Colors.amarelinho,
        borderBottomWidth: 2,
        color: Colors.amarelinho,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 0
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer:{
        flex:1
    },
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    instructionText: {
        color: Colors.amarelinho,
        fontSize: 24
    }
});