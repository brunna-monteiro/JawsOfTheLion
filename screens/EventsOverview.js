import { View, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect, useState, useEffect } from 'react'
import ColorPalette from '../constants/ColorPalette'
import { EVENTS } from '../data/data'
import EventItem from '../components/event/EventItem'
import IconButton from '../components/ui/IconButton'
import { useGame } from '../components/GameContext'

const EventsOverview = ({ route, navigation }) => {
  const { gameIds, setGameIds } = useGame()

  // Set gameIds from route params when component mounts
  useEffect(() => {
    if (route.params?.gameIds) {
      setGameIds(route.params.gameIds)
    }
  }, [route.params?.gameIds, setGameIds])

  const [isEditEnabled, setIsEditEnabled] = useState(false)

  // Use the gameIds from the context instead of directly from the route
  const gId = gameIds

  const displayedEvents = EVENTS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

// const EventsOverview = ({ route, navigation }) => {

//   const { gameIds, setGameIds } = useGame();

//   // Set gameIds from route params when component mounts
//   useEffect(() => {
//     if (route.params?.gameIds) {
//       setGameIds(route.params.gameIds);
//     }
//   }, [route.params?.gameIds])
  


//   const [isEditEnabled, setIsEditEnabled] = useState(false)

//   const gId = route.params.gameIds


//   const displayedEvents = EVENTS.filter((item) => {
//     return item.gameIds.indexOf(gId) >= 0
//     })
    
  function renderEvent(itemData) {
    return <EventItem id={itemData.item.id} isEditEnabled={isEditEnabled}/>
    }
  
  function editButtonHandler() {
    // o callback vai utilizar o atual estado quando a
    // função setIsEditEnabled for chamada. Se for passado
    // somente !isEditEnabled para a função, o estado considerado
    // pode ter mudado quando a função efetivamente executar.
    setIsEditEnabled(currentState => !currentState)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
        icon={isEditEnabled ? 'check-square' : 'edit'} 
        color={ColorPalette.icon} 
        onPress={editButtonHandler} 
        bgColor={isEditEnabled ? ColorPalette.activeIcon : null} />
      }
    })
  }, [navigation, editButtonHandler])

  return (
    <>
      <View style={styles.outterContainer}>
        <View style={styles.container}>
          <FlatList 
          data={displayedEvents} 
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
      backgroundColor: ColorPalette.bglight,
      alignItems: 'center',
  
      borderWidth: 1,
      borderRadius: 8,
      borderColor: ColorPalette.OSShadow
    },
  })