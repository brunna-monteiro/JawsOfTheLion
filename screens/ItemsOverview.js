import { useEffect } from 'react'
import { useGame } from '../components/GameContext'
import { FlatList } from 'react-native'
import { ITEMS } from '../data/data'
import ItemItem from '../components/ItemItem'

const ItemsOverview = ({ route }) => {
  const { gameIds, setGameIds } = useGame()

  useEffect(() => {
    if (route.params?.gameIds) {
      setGameIds(route.params.gameIds)
    }
  }, [route.params?.gameIds, setGameIds])

  const gId = gameIds

  const displayedItems = ITEMS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

  function renderItem(itemData) {
    const itemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
    }
    return (
      <ItemItem {...itemProps}/>
  )}
  return (
        <FlatList 
        data={displayedItems} 
        keyExtractor={(item) => item.id} 
        renderItem={renderItem}/>
  )
}

export default ItemsOverview