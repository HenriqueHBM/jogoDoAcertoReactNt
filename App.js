import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

// SafeAreaView de onde foi pego; https://www.freecodecamp.org/news/how-to-use-safe-area-context-to-avoid-notches-in-react-native-apps/
// o normal do react não funciona corretamente no android 
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoad] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf'),
    'lucy': require('./assets/fonts/Lucy Said Ok Personal Use.ttf')
  });

  if(!fontsLoad){
    return <AppLoading />;
  }
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}  />;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }

  return (
    <LinearGradient colors={[Colors.roxoEscuro, Colors.amarelo_claro]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/fundo.webp')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage:{
    opacity:0.15
  }
});
