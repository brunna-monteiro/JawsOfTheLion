import { View, Text, StyleSheet } from 'react-native'
import ButtonTile from '../components/ButtonTile'
import { useGame } from '../store/context/GameContext'
import ColorPalette from '../constants/ColorPalette'

const GameSeletionScreen = ({navigation}) => {

  const { setGameData, findGameById, games } = useGame()

  function pressHandler(id) {
    const gameById = findGameById(id)
    setGameData(gameById)
    navigation.navigate("TabNavigator", { 
      screen: "GameOverviewScreen",
    })}

  return (
    <View style={styles.outterContainer}>

      {
        games.length ? games.map(game =>
          <ButtonTile key={game.id} onPress={() => pressHandler(game.id)}
            title={game.campaignName}
            player={game.players.map((player, index) => (
              <View style={styles.textContainer} key={index}>
                <Text style={styles.textLeft}>Player {index + 1}: {player.name} </Text>
                <Text style={styles.textRight}> {player.character} </Text>
              </View>
          ))} /> 
          
        ):null
      }
      </View>
  )
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