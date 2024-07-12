import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'
import ColorPalette from '../../constants/ColorPalette'

const EventItem = ({ id, isEditEnabled }) => {
  const [text, setText] = useState(id)
  const [bgColor, setBgColor] = useState(ColorPalette.notCompleted)

  const texts = [
    id,
    id + ' A',
    id + ' B',
  ]

  const eventColor = [
    ColorPalette.notCompleted,
    ColorPalette.choiceA,
    ColorPalette.choiceB
  ]

  const tapHandler = () => {
    if (!isEditEnabled) return
    const currentTextIndex = texts.indexOf(text)
    const nextTextIndex = (currentTextIndex + 1) % texts.length
    setText(texts[nextTextIndex])

    const currentColor = eventColor.indexOf(bgColor)
    const nextColor = (currentColor + 1) % eventColor.length
    setBgColor(eventColor[nextColor])
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