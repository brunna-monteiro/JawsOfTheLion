import { FlatList, View, Text } from 'react-native'
import ButtonTile from '../components/ButtonTile'
import { useGame } from '../components/GameContext'

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

  // return (
  //   <View>
  //     <ButtonTile 
  //     onPress={pressHandler} 
  //     title={game.campaignName}
  //     player={game.players.map((player, index) => (
  //       <View key={index}>
  //         <Text> - {player.name} - </Text>
  //       </View>
  //     ))} />
  //   </View>
  // )

  return (
    <View>
      <Text>Campaign Name: {game.campaignName}</Text>
      {game.players.map((player, index) => (
        <View key={index}>
          <Text>Player {index + 1} Name: {player.name}</Text>
          <Text>Character: {player.character}</Text>
        </View>
      ))}
    </View>
  );

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