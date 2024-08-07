import { View, FlatList, StyleSheet } from 'react-native'
import { useLayoutEffect, useState } from 'react'
import ColorPalette from '../constants/ColorPalette'
import { EVENTS } from '../data/data'
import EventItem from '../components/event/EventItem'
import IconButton from '../components/ui/IconButton'
import { useGame } from '../store/context/GameContext'

const EventsOverview = ({ navigation }) => {
  const { events, updateEventsList, currentEvents, updateEvent } = useGame()

  const [isEditEnabled, setIsEditEnabled] = useState(false)
  
  function renderEvent(itemData) {
    return <EventItem 
      id={itemData.item.id} 
      isEditEnabled={isEditEnabled}
      onToggle={() => updateEvent(itemData.item.id)} 
      state={itemData.item}/>
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
        bgColor={isEditEnabled ? ColorPalette.tabActive : null}
        style={{margin: 10}} />
      }
    })
  }, [navigation, editButtonHandler])

  return (
    <View style={styles.rootContainer}>
      <View style={styles.outterContainer}>
        <View style={styles.container}>
          <FlatList 
          data={currentEvents} 
          keyExtractor={(item) => item.id} 
          renderItem={renderEvent}
          numColumns={5}/>
        </View>
      </View>
    </View> 
)
}

export default EventsOverview


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: ColorPalette.primary900,
  },

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