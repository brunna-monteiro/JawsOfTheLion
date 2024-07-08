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
    const playerProps = {
      characterName: itemData.item.characterName,
      playerName: itemData.item.playerName,
      role: itemData.item.role,
    }
    return <PlayerItem {...playerProps}/>
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={displayedPlayers} 
      keyExtractor={(item) => item.id} 
      renderItem={renderPlayer}/>
    </View>
  )
}

export default PlayersOverview

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 20,
    backgroundColor: ColorPalette.bglight,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow
  },
})