import { FlatList } from 'react-native'
import ButtonTile from '../components/ButtonTile'
import { GAMES } from '../data/data'

const GameSeletionScreen = ({navigation}) => {

  const renderGame = (itemData) => {
    function pressHandler() {
      navigation.navigate("GameOverview", {
        gameIds: itemData.item.id,
      })
    }
  
      return <ButtonTile title={itemData.item.title} 
      player={itemData.item.player}
      onPress={pressHandler}/>
  }

  return (
    <FlatList data={GAMES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderGame}
    numColumns={1}
    />
  )
}

export default GameSeletionScreen