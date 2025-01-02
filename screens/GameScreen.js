import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/interfaces/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/interfaces/PrimaryButton";
import Card from "../components/interfaces/card";
import InstructionText from "../components/interfaces/InstructionText";
import {Ionicons} from '@expo/vector-icons';


// função/variaveis fora do escopo para nao ficar recriando os mesmos, melhorando a performance;
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum;
    }
}

// variaveis pois vao ser alteradas
let minNum = 1;
let maxNum = 100;

function GameScreen({ userNumber, onGameOver }) {
    // primeiro chute da maquina, removendo o valor inserido para nao acertar de primeira;
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    // salvando o chute
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {            
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'menor' && currentGuess < userNumber) ||
            (direction === 'maior' && currentGuess > userNumber)
        ) {
            Alert.alert(
                'Não minta o ANIMAL.',
                'Você sabe que está errado!!!',
                [
                    { text: 'Desculpa >-<', style: 'cancel' }
                ]
            );
            return;
        }
        if (direction === 'menor') {
            maxNum = currentGuess;
        } else {
            minNum = currentGuess + 1;
        }
        const newRnNumber = generateRandomBetween(minNum, maxNum, currentGuess);
        setCurrentGuess(newRnNumber);
    }
    return (
        <View style={styles.screen}>
            <Title>Chute do Oponente</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Maior ou Menor?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        {/* nao faz sentido para mim, so aceitei usar o bind */}
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'maior')}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'menor')}>
                            <Ionicons name="remove-circle-outline" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    aparecerButtons: {
        height: 70
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer:{
        flex:1,
        height:50
    },
    InstructionText:{
        marginBottom:12
    }
})