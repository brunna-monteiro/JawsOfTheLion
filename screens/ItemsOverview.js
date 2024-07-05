import { View, FlatList, StyleSheet } from 'react-native'
import { ITEMS } from '../data/data'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import ItemItem from '../components/ItemItem'

const ItemsOverview = ({ route }) => {
  const gId = route.params.gameIds
  const displayedItems = ITEMS.filter((item) => {
    return item.gameIds.indexOf(gId) >= 0
  })

  function renderItem(itemData) {
    return (
      <ItemItem
      imageUrl={itemData.item.imageUrl}
      title={itemData.item.title}/>
  )}
  return (
    <View style={styles.outterContainer}>
      <View style={styles.container}>
        <BodyText>Items</BodyText> 
        <FlatList 
        data={displayedItems} 
        keyExtractor={(item) => item.id} 
        renderItem={renderItem}/>
      </View>
    </View>
  )
}

export default ItemsOverview

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    // justifyContent: 'space-around',
  },

  container: {
    padding: 16,
    backgroundColor: ColorPalette.bglight,
    alignItems: 'stretch',

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow
  },
})