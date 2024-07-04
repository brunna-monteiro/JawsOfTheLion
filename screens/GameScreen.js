import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import { SCENARIOS, ITEMS, EVENTS, PLAYERS, GAMES} from '../data/data'
import PrimaryButton from '../components/ui/PrimaryButton'
import ButtonTile from '../components/ButtonTile'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import ScenarioItem from '../components/ScenarioItem'
import ItemItem from '../components/ItemItem'
import EventItem from '../components/EventItem'
import PlayerItem from '../components/PlayerItem'


const GameOverviewScreen = ({ navigation, route }) => {

  const scenarioContainer = (itemData) => {
    function scenarioHandler() {
      navigation.navigate("Completed Scenarios", {
        gameIds: itemData.item.id,
      })
    }
      return (
        <PrimaryButton 
        onPress={scenarioHandler}>
          completed scenarios</PrimaryButton>
      )
  }



  // const gId = route.params.gameIds

  // const displayedEvents = EVENTS.filter((item) => {
  //   return item.gameIds.indexOf(gId) >= 0
  // })

  // function renderEvent(itemData) {
  //   return <EventItem id={itemData.item.id}/>
  // }


  return (
    <>
    <View style={styles.outterContainer}>
      
      <View style={styles.container}>
        <BodyText>Scenarios</BodyText>
        <Pressable>{scenarioContainer}</Pressable>
      </View>
        
      {/* <View style={styles.container}>
        <BodyText>Items</BodyText> 
        <FlatList 
        data={displayedItems} 
        keyExtractor={(item) => item.id} 
        renderItem={renderItem}/>
      </View> */}

      {/* <View style={styles.container}>
      <BodyText>City Events</BodyText> 
        <FlatList 
        data={displayedEvents} 
        keyExtractor={(item) => item.id} 
        renderItem={renderEvent}
        numColumns={6}/>
      </View> */}

      {/* <View style={styles.container}>
        <BodyText>Players</BodyText> 
        <FlatList 
        data={displayedPlayers} 
        keyExtractor={(item) => item.id} 
        renderItem={renderPlayer}/>
      </View> */}
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