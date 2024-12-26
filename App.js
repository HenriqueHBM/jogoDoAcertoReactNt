import { ImageBackground, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#6D1A36', '#EFF2C0']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/fundo.webp')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <StartGameScreen  />
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
