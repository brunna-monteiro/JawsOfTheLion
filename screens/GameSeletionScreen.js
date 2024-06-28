import { FlatList } from 'react-native'
import ButtonTile from '../components/ButtonTile'
import { GAMES } from '../data/data'

const renderGame = (itemData) => {
    return <ButtonTile title={itemData.item.title} 
    player={itemData.item.player}/>
}

const GameSeletionScreen = () => {
  return (
    <FlatList data={GAMES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderGame}
    numColumns={1}
      />
  )
}

export default GameSeletionScreen