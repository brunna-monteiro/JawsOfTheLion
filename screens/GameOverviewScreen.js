import { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import EventInput from '../components/event/EventInput'
import EventCompleted from '../components/event/EventCompleted'
import { useGame } from '../components/GameContext'


const GameOverviewScreen = ({ route }) => {

  const { gameId, setGameId, events, setEvents, state} = useGame()
  // const { gameId } = route.params
  // const game = gameId.games.find(game => game.id === gameId)

  useEffect(() => {
    if (route.params?.gameId) {
      setGameId(route.params.gameId);
    }
  }, [route.params?.gameId])
  
  
  // Check if a city event is completed or not
  const [ eventDisplay, setEventDisplay ] = useState(null)
  function eventHandler(enteredEventNum) {
    const checkEvent = events.find(event => event.id === enteredEventNum)
  
    if(checkEvent) setEventDisplay('completed')
    else setEventDisplay('not-completed')
  }


  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView style={styles.root} behavior='position'>
          <View style={styles.outterContainer}>
      
            <View style={styles.container}>
              <BodyText>Scenarios</BodyText>
            </View>

            <View style={styles.container}>
              <BodyText>City Events</BodyText> 
              <EventInput onClickEvent={eventHandler}/>

              {
                eventDisplay && 
                <EventCompleted type={ eventDisplay === 'completed' ? 'success' : 'failure'} />
              }

            </View>

            <View style={styles.container}>
              <BodyText>Items</BodyText>
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
    backgroundColor: ColorPalette.boxLight,

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