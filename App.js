import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OpenScreen from './screens/OpenScreen'
import NewGameScreen from './screens/NewGameScreen'
import GameSeletionScreen from './screens/GameSeletionScreen'
import GameOverviewScreen from './screens/GameOverviewScreen'
import ScenariosOverview from './screens/ScenariosOverview'
import EventsOverview from './screens/EventsOverview'
import ItemsOverview from './screens/ItemsOverview'
import PlayersOverview from './screens/PlayersOverview'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'

import { GameProvider } from './components/GameContext'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

function TabNavigator() {

  return (
    <BottomTab.Navigator 
      screenOptions={{
      headerStyle: {backgroundColor: '#0d4064'}, 
      headerTintColor: 'white',
      tabBarActiveBackgroundColor: '#2488d0',
      tabBarActiveTintColor: 'black'
      }}>

      <BottomTab.Screen name="GameOverviewScreen" component={GameOverviewScreen}/>

      <BottomTab.Screen name="Scenarios" component={ScenariosOverview} options={
        { tabBarIcon: ({ color, size}) => (<FontAwesome6 name='mountain-city' color={color} size={size}/>)}}/>

      <BottomTab.Screen name="Events" component={EventsOverview} options={
        { tabBarIcon: ({ color, size}) => (<MaterialCommunityIcons name='table-check' color={color} size={size}/>)}}/>

      <BottomTab.Screen name="Items" component={ItemsOverview} options={
        { tabBarIcon: ({ color, size}) => (<MaterialCommunityIcons name='shield-sword' color={color} size={size}/>)}}/>

      <BottomTab.Screen name="Players" component={PlayersOverview} options={
        { tabBarIcon: ({ color, size}) => (<FontAwesome6 name='people-group' color={color} size={size}/>)}}/>

    </BottomTab.Navigator>
)}

function StackNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{
      headerStyle: {backgroundColor: '#0d4064'}, 
      headerTintColor: 'white',
      contentStyle: {backgroundColor: '#092c44'}}}>

      <Stack.Screen name="OpenScreen" component={OpenScreen} options={{headerShown: false}}/>

      <Stack.Screen name="NewGame" component={NewGameScreen} options={{title: 'New Game'}}/>

      <Stack.Screen name="GameSelection" component={GameSeletionScreen} options={{title: 'Select Game'}}/>

      <Stack.Screen name="TabNavigator" component={TabNavigator} />

    </Stack.Navigator>
  )
}

export default function App() {

  return (
      <>
      <StatusBar style='light' />
      <GameProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </GameProvider>
      </>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
