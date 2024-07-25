import { View, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect, useState, useEffect } from 'react'
import ColorPalette from '../constants/ColorPalette'
import { EVENTS } from '../data/data'
import EventItem from '../components/event/EventItem'
import IconButton from '../components/ui/IconButton'
import { useGame } from '../components/GameContext'

const EventsOverview = ({ route, navigation }) => {
  const { gameIds, setGameIds, events, setEvents } = useGame()

  // Set gameIds from route params when component mounts
  useEffect(() => {
    if (route.params?.gameIds) {
      setGameIds(route.params.gameIds)
    }
  }, [route.params?.gameIds, setGameIds])

  const [isEditEnabled, setIsEditEnabled] = useState(false)

  const toggleEvent = (eventNumber) => {
    const toggledEvent = events.find(event => event.id === eventNumber) || {}
    if (!toggledEvent.id) {
      toggledEvent.id = eventNumber
      toggledEvent.gameIds = [gameIds]
      toggledEvent.choice = null
    } else if (!toggledEvent.gameIds.find(gameIds)) {
      toggledEvent.gameIds.push(gameIds)
    }

    switch (toggledEvent.choice) {
      case null:
        toggledEvent.choice = 'A'
        break
      case 'A':
        toggledEvent.choice = 'B'
        break
      case 'B':
        toggledEvent.choice = null
        break
      default:
        throw new Error('Invalid case')
    }

    return toggledEvent
  }
  const addEventToList = (eventNumber) => {
    setEvents((currentState => {
      const event = toggleEvent(eventNumber)
      const editedEvents = currentState.filter(e => e.id !== eventNumber)
      return [
        ...editedEvents,
        event
      ]
    }))
  }

  useEffect(() => {
    console.log(events)
  }, [events])

  // Use the gameIds from the context instead of directly from the route
  const gId = gameIds
    
  function renderEvent(itemData) {
    return <EventItem id={itemData.item.id} isEditEnabled={isEditEnabled} onToggle={addEventToList} state={events.find(e => e.id === itemData.item.id)}/>
    }
  
  function editButtonHandler() {
    // o callback vai utilizar o atual estado quando a
    // função setIsEditEnabled for chamada. Se for passado
    // somente !isEditEnabled para a função, o estado considerado
    // pode ter mudado quando a função efetivamente executar.
    setIsEditEnabled(currentState => !currentState)
    // setState({ ...state, newValue: 'Updated!' })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
        icon={isEditEnabled ? 'check-square' : 'edit'} 
        color={ColorPalette.icon} 
        onPress={editButtonHandler} 
        bgColor={isEditEnabled ? ColorPalette.tabActive : null}
        style={{margin: 10}} />
      }
    })
  }, [navigation, editButtonHandler])

  return (
    <>
      <View style={styles.outterContainer}>
        <View style={styles.container}>
          <FlatList 
          data={EVENTS} 
          keyExtractor={(item) => item.id} 
          renderItem={renderEvent}
          numColumns={5}/>
        </View>
      </View>
    </> 
)
}

export default EventsOverview


const styles = StyleSheet.create({
    outterContainer: {
      flex: 1,
      margin: 16,
      borderRadius: 8,
    },
  
    container: {
      flex: 1,
      backgroundColor: ColorPalette.boxLight,
      alignItems: 'center',
  
      borderWidth: 1,
      borderRadius: 8,
      borderColor: ColorPalette.OSShadow
    },
  })