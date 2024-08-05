import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { useGame } from '../components/GameContext'
import ColorPalette from '../constants/ColorPalette'
import PlayerItem from '../components/PlayerItem'

const PlayersOverview = ({ route }) => {
  const { gameId, setGameId, playerData, gameData } = useGame()

  console.log(gameData)
  const displayedPlayers = gameData.players ?? []

  function renderPlayer(itemData) {
    const playerProps = {
      name: itemData.item.name,
      character: itemData.item.character,
    }
    return <PlayerItem {...playerProps}/>
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={displayedPlayers} 
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderPlayer}/>
    </View>
  )
}

export default PlayersOverview

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 20,
    backgroundColor: ColorPalette.boxLight,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow
  },
})