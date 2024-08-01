import { View, Text, StyleSheet } from 'react-native'
import ButtonTile from '../components/ButtonTile'
import { useGame } from '../components/GameContext'
import ColorPalette from '../constants/ColorPalette'

const GameSeletionScreen = ({navigation, route}) => {

  const { state } = useGame()
  const { gameId } = route.params
  const game = state.games.find(game => game.id === gameId)

  function pressHandler() {
    navigation.navigate("TabNavigator", { 
      screen: "GameOverviewScreen", 
      params: {gameId}
        },
    )}

  if (!game) {
    return <Text>Game not found</Text>
  }

  return (
    <View style={styles.outterContainer}>
      <ButtonTile onPress={pressHandler}
      title={game.campaignName}
      player={game.players.map((player, index) => (
        <View style={styles.textContainer} key={index}>
          <Text style={styles.textLeft}>Player {index + 1}: {player.name} </Text>
          <Text style={styles.textRight}> {player.character} </Text>
        </View>
      ))} />
    </View>
  )

//   const renderGame = (itemData) => {
//     function pressHandler() {
//       navigation.navigate("TabNavigator", { 
//         screen: "GameOverviewScreen", 
//         params: { gameIds: itemData.item.id,
//          },
//       })
//     }
  
//       return <ButtonTile title={itemData.item.title} 
//       player={itemData.item.player}
//       onPress={pressHandler}/>
//   }

//   return (
//     <FlatList data={GAMES} 
//     keyExtractor={(item) => item.id} 
//     renderItem={renderGame}
//     numColumns={1}
//     />
//   )
}

export default GameSeletionScreen

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: ColorPalette.boxDark,
    marginHorizontal: 30,
    marginVertical: 5,
  },

  textLeft: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left'
  },

  textRight: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'right'
  },
})