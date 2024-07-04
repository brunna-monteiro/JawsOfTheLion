import { View, FlatList, StyleSheet } from 'react-native'
import { SCENARIOS } from '../data/data'
import ColorPalette from '../constants/ColorPalette'
import BodyText from '../components/ui/BodyText'
import ScenarioItem from '../components/ScenarioItem'

const ScenariosOverview = ({ route }) => {
  const gId = route.params.gameIds
  const displayedScenarios = SCENARIOS.filter((scenario) => {
    return scenario.gameIds.indexOf(gId) >= 0
  })

  function renderScenario(itemData) {
    return <ScenarioItem title={itemData.item.title} 
    goal={itemData.item.goal}/>
  }
  return (
    <>
     <View style={styles.outterContainer}>
        <View style={styles.container}>
          <BodyText>Scenarios</BodyText>
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
    justifyContent: 'space-around',
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