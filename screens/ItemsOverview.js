import { FlatList } from 'react-native'
import { ITEMS } from '../data/data'
import ItemItem from '../components/ItemItem'

const ItemsOverview = ({ route }) => {
  const gId = route.params.gameIds
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