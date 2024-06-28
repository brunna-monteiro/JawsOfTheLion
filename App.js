import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground } from 'react-native'
import GameSeletionScreen from './screens/GameSeletionScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GameOverviewScreen from './screens/GameScreen'

const Stack = createNativeStackNavigator()

export default function App() {

    return (
        <>
            <StatusBar style='light' />
                <ImageBackground source={require('./assets/images/bg1.jpg')}
                resizeMode='cover'
                style={styles.root}
                imageStyle={styles.backgroundImage}>
                <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Select Game" component={GameSeletionScreen}/>
                    <Stack.Screen name="Game Overview" component={GameOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
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
})
