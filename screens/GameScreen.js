import { View, FlatList, Button, StyleSheet } from 'react-native'
import { EVENTS, PLAYERS } from '../data/data'
import SecondaryButton from '../components/ui/SecondaryButton'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import SimpleText from '../components/ui/SimpleText'
import EventItem from '../components/EventItem'
import EventInput from '../components/EventInput'


const GameOverviewScreen = ({ navigation, route }) => {
  const gId = route.params.gameIds

  const scenarioContainer = () => {
      navigation.navigate("Scenarios", {gameIds: gId})
    }
// check if an event was complete
  function addEventHandler(enteredEventNum) {
    const checkEvent = EVENTS.find((event) => event.id === gId).completed
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

  function renderPlayers(itemData) {
    return <SimpleText>{itemData.item.playerName}</SimpleText>
  }

  const playerContainer = () => {
    navigation.navigate("Players", {gameIds: gId})
  }


  return (
    <>
    <View style={styles.outterContainer}>
      
      <View style={styles.container}>
        <BodyText>Available Scenarios</BodyText>
        <SecondaryButton onPress={scenarioContainer}>Completed Scenarios</SecondaryButton>
      </View>
        

      <View style={styles.container}>
        <BodyText>Completed City Events</BodyText> 
        <EventInput onAddEvent={addEventHandler}/>
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
        <View style={styles.wrapContainer}>
          <FlatList 
          data={playersName} 
          keyExtractor={(item) => item.id} 
          renderItem={renderPlayers}
          numColumns={4}
          />
        </View>
        <SecondaryButton onPress={playerContainer}>Players Details</SecondaryButton>
      </View>

    </View>
    </>
  )
}

export default GameOverviewScreen

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'space-around',
  },

  container: {
    flex: 2,
    padding: 16,
    backgroundColor: ColorPalette.bglight,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow,
    marginVertical: 40,
    justifyContent: 'space-evenly',
  },

  wrapContainer: {
    alignItems: 'center'
  },

})