import { View, Text, StyleSheet } from 'react-native'
import { SCENARIOS, ITEMS, EVENTS, PLAYERS } from '../data/data'

const GameOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Game Overview Screen</Text>
    </View>
  )
}

export default GameOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})