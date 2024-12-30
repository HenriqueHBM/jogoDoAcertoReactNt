import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/interfaces/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/interfaces/PrimaryButton";

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

function GameScreen({ userNumber }) {
    // primeiro chute da maquina, removendo o valor inserido para nao acertar de primeira;
    const initialGuess = generateRandomBetween(minNum, maxNum, userNumber);
    // salvando o chute
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    function nextGuessHandler(direction) {
        if(
            (direction === 'menor' && currentGuess < userNumber) || 
            (direction === 'maior' && currentGuess > userNumber)
        ){
            Alert.alert(
                'Não minta o ANIMAL.',
                'Você sabe que está errado!!!',
                [
                    {text:'Desculpa >-<', style:'cancel'}
                ]
            );
            return ;
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
            <View>
                <Text>Maior ou Menor?</Text>
                <View style={styles.aparecerButtons}>
                    {/* nao faz sentido para mim, so aceitei usar o bind */}
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'maior')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'menor')}>-</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    aparecerButtons:{
        height:85
    }
})