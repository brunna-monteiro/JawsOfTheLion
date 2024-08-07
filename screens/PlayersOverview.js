import { View, FlatList, StyleSheet } from 'react-native'
import { useGame } from '../store/context/GameContext'
import ColorPalette from '../constants/ColorPalette'
import PlayerItem from '../components/PlayerItem'

const PlayersOverview = () => {
  const { gameData } = useGame()

  const displayedPlayers = gameData.players ?? []

  function renderPlayer(itemData) {
    const playerProps = {
      name: itemData.item.name,
      character: itemData.item.character,
    }
    return <PlayerItem {...playerProps}/>
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <FlatList 
        data={displayedPlayers} 
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPlayer}/>
      </View>
    </View>
  )
}

export default PlayersOverview

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: ColorPalette.primary900,
  },

  container: {
    padding: 16,
    margin: 20,
    backgroundColor: ColorPalette.boxLight,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow
  },
})