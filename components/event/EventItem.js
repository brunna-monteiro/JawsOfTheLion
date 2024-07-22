import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import ColorPalette from '../../constants/ColorPalette'

const EventItem = ({ id, isEditEnabled, onToggle, state }) => {
  const renderText = () => {
    if (!state || !state.choice) return id
    return id + state.choice
  }

  const [text, setText] = useState(renderText())
  const [bgColor, setBgColor] = useState(ColorPalette.notCompleted)

  const colors = {
    [id]: ColorPalette.notCompleted,
    [id + 'A']: ColorPalette.choiceA,
    [id + 'B']: ColorPalette.choiceB
  }

  useEffect(() => {
    setBgColor(colors[text])
  }, [text])

  useEffect(() => {
    setText(renderText())
  })

  const tapHandler = () => {
    onToggle(id)
  }

  return (
    <View style={[styles.outterContainer, { backgroundColor: bgColor }]}>
      <TouchableOpacity onPress={tapHandler} disabled={!isEditEnabled}>
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