import { View, Text, StyleSheet } from 'react-native'
import { SCENARIOS, ITEMS, EVENTS, PLAYERS, GAMES } from '../data/data'
import { useRoute } from '@react-navigation/native'

const GameOverviewScreen = ({ route }) => {
  // const route = useRoute()
  // route.params.EVENTS.gameIds
  const gId = route.params.gameIds
  return (
    <View style={styles.container}>
      <Text>Game Overview Screen - {gId}</Text>
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