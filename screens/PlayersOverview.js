import { View, FlatList, StyleSheet } from 'react-native'
import { PLAYERS } from '../data/data'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import PlayerItem from '../components/PlayerItem'

const PlayersOverview = ({ route }) => {
  const gId = route.params.gameIds
  const displayedPlayers = PLAYERS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

  function renderPlayer(itemData) {
    return <PlayerItem charcterName={itemData.item.charcterName}
    playerName={itemData.item.playerName} 
    role={itemData.item.role}/>
  }

  return (
    <View style={styles.container}>
      <BodyText>Players</BodyText> 
      <FlatList 
      data={displayedPlayers} 
      keyExtractor={(item) => item.id} 
      renderItem={renderPlayer}/>
    </View>
  )
}

export default PlayersOverview

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