import { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { EVENTS } from '../data/data'
import ColorPalette from '../constants/ColorPalette'
import SecondaryButton from '../components/ui/SecondaryButton'
import BodyText from '../components/ui/BodyText'
import EventInput from '../components/event/EventInput'
import EventCompleted from '../components/event/EventCompleted'
import { useGame } from '../components/GameContext'


const GameOverviewScreen = ({ navigation, route }) => {

  const { gameIds, setGameIds } = useGame();

  useEffect(() => {
    if (route.params?.gameIds) {
      setGameIds(route.params.gameIds);
    }
  }, [route.params?.gameIds])

  const gId = route.params.gameIds


  const [ eventDisplay, setEventDisplay ] = useState(null)

  // const scenarioContainer = () => {
  //     navigation.navigate("Scenarios", {gameIds})
  //   }

  // const eventContainer = () => {
  //     navigation.navigate("Events", {gameIds})
  // }

  const displayedEvents = EVENTS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

  // Check if a city event is completed or not
  function eventHandler(enteredEventNum) {
    const checkEvent = displayedEvents.find((event) => event.id === enteredEventNum)
    if(checkEvent) setEventDisplay('completed')
    else setEventDisplay('not-completed')
  }
    
  // const itemContainer = () => {
  //   navigation.navigate("Items", {gameIds})
  // }

  // const playerContainer = () => {
  //   navigation.navigate("Players", {gameIds})
  // }


  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={styles.root} behavior='position'>
          <View style={styles.outterContainer}>
      
            <View style={styles.container}>
              <BodyText>Scenarios</BodyText>
              {/* <SecondaryButton onPress={scenarioContainer}>Scenarios Details</SecondaryButton> */}
            </View>

            <View style={styles.container}>
              <BodyText>City Events</BodyText> 
              <EventInput onClickEvent={eventHandler}/>

              {
                eventDisplay && 
                <EventCompleted type={ eventDisplay === 'completed' ? 'success' : 'failure'} />
              }
              
              {/* <SecondaryButton onPress={eventContainer}>Events Details</SecondaryButton> */}
            </View>

            <View style={styles.container}>
              <BodyText>Items</BodyText>
              {/* <SecondaryButton onPress={itemContainer}>Items Details</SecondaryButton> */}
            </View>

            <View style={styles.container}>
              <BodyText>Players</BodyText>
              {/* <SecondaryButton onPress={playerContainer}>Players Details</SecondaryButton> */}
            </View>

          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}

export default GameOverviewScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  scrollView: {
    flexGrow: 1
  },

  outterContainer: {
    flexGrow: 1,
    marginHorizontal: 16,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },

  container: {
    padding: 40,
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