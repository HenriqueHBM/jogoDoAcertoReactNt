import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';

// SafeAreaView de onde foi pego; https://www.freecodecamp.org/news/how-to-use-safe-area-context-to-avoid-notches-in-react-native-apps/
// o normal do react não funciona corretamente no android 
export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} />;
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
