import { View, Text, StyleSheet } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'

const EventItem = ({ id, choice }) => {
  return (
    <View style={styles.outterContainer}>
      <View style={styles.container}>
          <Text style={styles.text}>{id} {choice}</Text>
      </View>
    </View>
  )
}

export default EventItem

const styles = StyleSheet.create({
  outterContainer: {
    backgroundColor: ColorPalette.primary,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    padding: 15,

    elevation: 4,
  },

  container: {
    flex: 1,
  },

  text: {
    color: ColorPalette.titleFont,
    fontSize: 20,
  }
})