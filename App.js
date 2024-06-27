import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ImageBackground } from 'react-native'
import GameSeletionScreen from './screens/GameSeletionScreen'

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <ImageBackground source={require('./assets/images/bg.jpg')}
            resizeMode='cover'
            style={styles.root}
            imageStyle={styles.backgroundImage}>
                <View style={styles.container}>
                    <GameSeletionScreen />
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.6,
    },
    container: {
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',

    }
})
