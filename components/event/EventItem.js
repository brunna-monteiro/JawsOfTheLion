import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'

const EventItem = ({ id, isEditEnabled, onToggle, state }) => {
  const text = state.choice ? `${state.id}${state.choice}` : String(state.id)

  const colors = {
    default: ColorPalette.notCompleted,
    A: ColorPalette.choiceA,
    B: ColorPalette.choiceB
  }

  const color = state.choice ? colors[state.choice] : colors.default

  return (
    <View style={[styles.outterContainer, { backgroundColor: color }]}>
      <TouchableOpacity onPress={() => onToggle(id)} disabled={!isEditEnabled}>
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default EventItem

const styles = StyleSheet.create({
  outterContainer: {
    borderColor: ColorPalette.border,
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    padding: 12,
  },

  container: {
    flex: 1,
  },

  text: {
    color: ColorPalette.titleFont,
    fontSize: 16,
    width: 34,
    height: 34,
    textAlign: 'center'
  }
})