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
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
            headerStyle: {backgroundColor: '#0d4064'}, 
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#092c44'}}}>
            <Stack.Screen name="OpenScreen" component={OpenScreen} options={{headerShown: false}}/>
            <Stack.Screen name="NewGame" component={NewGameScreen} options={{title: 'New Game'}}/>
            <Stack.Screen name="GameSelection" component={GameSeletionScreen} options={{title: 'Select Game'}}/>
            <Stack.Screen name="GameOverview" component={GameOverviewScreen} options={{title: 'Game Overview'}}/>
            <Stack.Screen name="Scenarios" component={ScenariosOverview} options={{title: 'Completed Scenarios'}}/>
            <Stack.Screen name="Items" component={ItemsOverview}/>
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
})
