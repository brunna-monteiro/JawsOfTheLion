import { View, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect } from 'react'
import ColorPalette from '../constants/ColorPalette'
import { EVENTS } from '../data/data'
import EventItem from '../components/event/EventItem'
import IconButton from '../components/ui/IconButton'

const EventsOverview = ({ route, navigation }) => {

  const gId = route.params.gameIds

  const displayedEvents = EVENTS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
    })
    
  function renderEvent(itemData) {
    return <EventItem id={itemData.item.id} choice={itemData.item.choice}/>
    }
  
  function editButtonHandler() {
    console.log('Pressed!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton type={'edit'} onPress={editButtonHandler}/>
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