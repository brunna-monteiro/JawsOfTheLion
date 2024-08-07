import { useEffect, useState } from 'react'
import { useGame } from '../store/context/GameContext'
import { FlatList, View, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'
import { ITEMS } from '../data/data'
import ItemItem from '../components/ItemItem'

const ItemsOverview = ({ route }) => {
  const { gameIds, setGameIds, state, setState } = useGame()

  useEffect(() => {
    if (route.params?.gameIds) {
      setGameIds(route.params.gameIds)
    }
  }, [route.params?.gameIds, setGameIds, state])

  const [isEditEnabled, setIsEditEnabled] = useState(false)

  const gId = gameIds

  function renderEvent(itemData) {
    return <EventItem id={itemData.item.id} isEditEnabled={isEditEnabled}/>
    }
  
  function editButtonHandler() {
    setIsEditEnabled(currentState => !currentState)
    setState({ ...state, newValue: 'Updated!' })
  }

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
    <View style={styles.rootContainer}>
      <FlatList 
      data={displayedItems} 
      keyExtractor={(item) => item.id} 
      renderItem={renderItem}/>
    </View>
  )
}

export default ItemsOverview

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: ColorPalette.primary900,
  },
})