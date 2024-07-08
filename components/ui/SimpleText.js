import { View, Text, StyleSheet } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'

const SimpleText = ({children, style}) => {

  return (
    <Text style= {[styles.text, style]}>{children}</Text>
  )
}

export default SimpleText

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: ColorPalette.textFont,
    marginRight: 20,
    textAlign: 'center'
  },
})