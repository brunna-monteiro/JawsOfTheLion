import { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { EVENTS, PLAYERS } from '../data/data'
import SecondaryButton from '../components/ui/SecondaryButton'
import BodyText from '../components/ui/BodyText'
import SimpleText from '../components/ui/SimpleText'
import EventItem from '../components/EventItem'
import EventInput from '../components/EventInput'
import ColorPalette from '../constants/ColorPalette'
import EventCompleted from '../components/event/EventCompleted'


const GameOverviewScreen = ({ navigation, route }) => {
  const gId = route.params.gameIds

  const [ eventDisplay, setEventDisplay ] = useState(null)

  const scenarioContainer = () => {
      navigation.navigate("Scenarios", {gameIds: gId})
    }
    const displayedEvents = EVENTS.filter((item) => {
      return item.gameIds.indexOf(gId) >= 0
    })
    
    function renderEvent(itemData) {
      return <EventItem id={itemData.item.id}/>
    }


  // Check if a city event is completed or not
    function eventHandler(enteredEventNum) {
      const checkEvent = displayedEvents.find((event) => event.id === enteredEventNum)
      if(checkEvent) setEventDisplay('completed')
      else setEventDisplay('not-completed')
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
        <BodyText>Scenarios</BodyText>
        <SecondaryButton onPress={scenarioContainer}>Scenarios Details</SecondaryButton>
      </View>

      <View style={styles.container}>
        <BodyText>City Events</BodyText> 
        <EventInput onClickEvent={eventHandler}/>
        {
          eventDisplay && 
          <EventCompleted type={ eventDisplay === 'completed' ? 'success' : 'failure'} />
        }
        <FlatList 
        data={displayedEvents} 
        keyExtractor={(item) => item.id} 
        renderItem={renderEvent}
        numColumns={6}/>
      </View>


      <View style={styles.container}>
        <BodyText>Items</BodyText>
        <SecondaryButton onPress={itemContainer}>Items Details</SecondaryButton>
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
  root: {
    flex: 1,
  },

  outterContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: ColorPalette.bglight,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },

  wrapContainer: {
    alignItems: 'center'
  },

})