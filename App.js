import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OpenScreen from './screens/OpenScreen'
import NewGameScreen from './screens/NewGameScreen'
import GameSeletionScreen from './screens/GameSeletionScreen'
import GameOverviewScreen from './screens/GameScreen'
import ScenariosOverview from './screens/ScenariosOverview'
import ItemsOverview from './screens/ItemsOverview'
import PlayersOverview from './screens/PlayersOverview'

const Stack = createNativeStackNavigator()

export default function App() {

    return (
        <>
            <StatusBar style='dark' />
                <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name=" " component={OpenScreen}/>
                    <Stack.Screen name="New Game" component={NewGameScreen}/>
                    <Stack.Screen name="Select Game" component={GameSeletionScreen}/>
                    <Stack.Screen name="Game Overview" component={GameOverviewScreen}/>
                    <Stack.Screen name="Completed Scenarios" component={ScenariosOverview}/>
                    <Stack.Screen name="Acquired Items" component={ItemsOverview}/>
                    <Stack.Screen name="Players" component={PlayersOverview}/>
                </Stack.Navigator>
            </NavigationContainer>
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
