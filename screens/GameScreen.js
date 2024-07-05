import { View, FlatList, Pressable, StyleSheet } from 'react-native'
import { EVENTS } from '../data/data'
import SecondaryButton from '../components/ui/SecondaryButton'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import EventItem from '../components/EventItem'
import PlayerItem from '../components/PlayerItem'


const GameOverviewScreen = ({ navigation, route }) => {
  const gId = route.params.gameIds

  const scenarioContainer = () => {
      navigation.navigate("Completed Scenarios", {gameIds: gId})
    }


  const displayedEvents = EVENTS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

  function renderEvent(itemData) {
    return <EventItem id={itemData.item.id}/>
  }

  const itemContainer = () => {
    navigation.navigate("Items", {gameIds: gId})
  }

  const playersName = PLAYERS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0})

  const playerContainer = () => {
    navigation.navigate("Players", {gameIds: gId})
  }


  return (
    <>
    <View style={styles.outterContainer}>
      
      <View style={styles.container}>
        <BodyText>Available Scenarios</BodyText>
        <SecondaryButton onPress={scenarioContainer}>see completed scenarios</SecondaryButton>
      </View>
        

      <View style={styles.container}>
      <BodyText>Completed City Events</BodyText> 
        <FlatList 
        data={displayedEvents} 
        keyExtractor={(item) => item.id} 
        renderItem={renderEvent}
        numColumns={6}/>
      </View>

      <View style={styles.container}>
        <BodyText>Available Items</BodyText>
        <SecondaryButton onPress={itemContainer}>Acquired Items</SecondaryButton>
      </View>

      <View style={styles.container}>
        <BodyText>Players</BodyText>
        <FlatList 
        data={playersName} 
        keyExtractor={(item) => item.id} 
        renderItem={item.playerName}/>
        <SecondaryButton onPress={playerContainer}>detailed description</SecondaryButton>
      </View>

    </View>
    </>
  )
}

export default GameOverviewScreen

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    justifyContent: 'space-around',
  },

  container: {
    padding: 16,
    backgroundColor: ColorPalette.bglight,
    alignItems: 'stretch',

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow
  },
})