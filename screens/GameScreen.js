import { View, FlatList, StyleSheet } from 'react-native'
import { SCENARIOS, ITEMS, EVENTS, PLAYERS} from '../data/data'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import ScenarioItem from '../components/ScenarioItem'
import ItemItem from '../components/ItemItem'
import EventItem from '../components/EventItem'
import PlayerItem from '../components/PlayerItem'
// import { useRoute } from '@react-navigation/native'

const GameOverviewScreen = ({ route }) => {
  // const route = useRoute()
  // route.params.EVENTS.gameIds
  const gId = route.params.gameIds

  const displayedScenarios = SCENARIOS.filter((scenario) => {
    return scenario.gameIds.indexOf(gId) >= 0
  })

  function renderScenario(itemData) {
    return <ScenarioItem title={itemData.item.title} 
    goal={itemData.item.goal}/>
  }

  const displayedItems = ITEMS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

  function renderItem(itemData) {
    return <ItemItem title={itemData.item.title} 
    acquired={itemData.item.acquired}
    availability={itemData.item.availability}/>
  }

  const displayedEvents = EVENTS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

  function renderEvent(itemData) {
    return <EventItem id={itemData.item.id}/>
  }

  const displayedPlayers = PLAYERS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

    function renderPlayer(itemData) {
      return <PlayerItem charcterName={itemData.item.charcterName}
      playerName={itemData.item.playerName} 
      role={itemData.item.role}/>
    }

  return (
    <>
    <View style={styles.outterContainer}>
      
      <View style={styles.container}>
        <BodyText>Scenarios</BodyText>
        <FlatList 
        data={displayedScenarios} 
        keyExtractor={(item) => item.id} 
        renderItem={renderScenario}/>
      </View>
        
      <View style={styles.container}>
        <BodyText>Items</BodyText> 
        <FlatList 
        data={displayedItems} 
        keyExtractor={(item) => item.id} 
        renderItem={renderItem}/>
      </View>

      <View style={styles.container}>
      <BodyText>City Events</BodyText> 
        <FlatList 
        data={displayedEvents} 
        keyExtractor={(item) => item.id} 
        renderItem={renderEvent}
        numColumns={6}/>
      </View>

      <View style={styles.container}>
        <BodyText>Players</BodyText> 
        <FlatList 
        data={displayedPlayers} 
        keyExtractor={(item) => item.id} 
        renderItem={renderPlayer}/>
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