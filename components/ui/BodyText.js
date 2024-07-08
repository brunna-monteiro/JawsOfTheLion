import { Text, StyleSheet, useWindowDimensions } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'

const BodyText = ({children, style}) => {

  const {width, height} = useWindowDimensions()
  const marginText = height < 400 ? 0 : 0

  return (
    <Text style= {[styles.text, style, {margin: marginText}]}>{children}</Text>
  )
}

export default BodyText

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: ColorPalette.textFont,
      textAlign: 'center',
    },
})