import { useLayoutEffect, useState } from 'react'
import { ScrollView, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { EVENTS } from '../data/data'
import ColorPalette from '../constants/ColorPalette'
import SecondaryButton from '../components/ui/SecondaryButton'
import IconButton from '../components/ui/IconButton'
import BodyText from '../components/ui/BodyText'
import EventInput from '../components/event/EventInput'
import EventCompleted from '../components/event/EventCompleted'


const GameOverviewScreen = ({ navigation, route }) => {
  const gId = route.params.gameIds

  const [ eventDisplay, setEventDisplay ] = useState(null)

  function menuButtonHandler() {
    console.log('Pressed!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton type={'menu'} onPress={menuButtonHandler}/>
      }
    })
  })

  const scenarioContainer = () => {
      navigation.navigate("Scenarios", {gameIds: gId})
    }

  const eventContainer = () => {
      navigation.navigate("Events", {gameIds: gId})
    }
    const displayedEvents = EVENTS.filter((item) => {
      return item.gameIds.indexOf(gId) >= 0
    })

  // Check if a city event is completed or not
    function eventHandler(enteredEventNum) {
      const checkEvent = displayedEvents.find((event) => event.id === enteredEventNum)
      if(checkEvent) setEventDisplay('completed')
      else setEventDisplay('not-completed')
    }
    
  const itemContainer = () => {
    navigation.navigate("Items", {gameIds: gId})
  }

  const playerContainer = () => {
    navigation.navigate("Players", {gameIds: gId})
  }


  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={styles.root} behavior='position'>
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
              <SecondaryButton onPress={eventContainer}>Events Details</SecondaryButton>
            </View>

            <View style={styles.container}>
              <BodyText>Items</BodyText>
              <SecondaryButton onPress={itemContainer}>Items Details</SecondaryButton>
            </View>

            <View style={styles.container}>
              <BodyText>Players</BodyText>
              <SecondaryButton onPress={playerContainer}>Players Details</SecondaryButton>
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