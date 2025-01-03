import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/interfaces/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/interfaces/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/game_over.jpg')} style={styles.image} />
            </View>
            <Text style={styles.summaryText}>
                O seu celular precisou de <Text style={styles.highlight}>{roundsNumber}</Text> números para acertar o seu número <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <View style={styles.aj_tamanho}>
                <PrimaryButton onPress={onStartNewGame}>Iniciar um novo jogo</PrimaryButton>

            </View>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 190,
        width: 340,
        height: 340,
        borderWidth:3,
        borderColor: Colors.amarelo_claro,
        overflow: 'hidden',
        margin: 36,
    },
    image:{
        width:'100%',
        hidth: '100%',
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems: 'center',
    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize:24,
        textAlign: 'center',
        marginBottom:24
    },
    highlight:{
        fontFamily:'open-sans',
        color: Colors.roxoEscuro,
        fontWeight: 'bold'
    },
    aj_tamanho:{
        height:45
    }
});