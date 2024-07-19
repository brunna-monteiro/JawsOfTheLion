import { View, FlatList, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { useGame } from '../components/GameContext'
import { SCENARIOS } from '../data/data'
import ColorPalette from '../constants/ColorPalette'
import ScenarioItem from '../components/ScenarioItem'

const ScenariosOverview = ({ route }) => {
  const { gameIds, setGameIds } = useGame()

  useEffect(() => {
    if (route.params?.gameIds) {
      setGameIds(route.params.gameIds)
    }
  }, [route.params?.gameIds, setGameIds])

  const gId = gameIds
  
  const displayedScenarios = SCENARIOS.filter((scenario) => {
    return scenario.gameIds.indexOf(gId) >= 0
  })

  function renderScenario(itemData) {
    return <ScenarioItem 
    title={itemData.item.title} 
    goal={itemData.item.goal}/>
  }
  return (
    <>
      <View style={styles.outterContainer}>
        <View style={styles.container}>
          <FlatList 
          data={displayedScenarios} 
          keyExtractor={(item) => item.id} 
          renderItem={renderScenario}/>
        </View>
      </View>
    </>
  )
}

export default ScenariosOverview

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
  },

  container: {
    padding: 16,
    backgroundColor: ColorPalette.bglight,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow
  },
})