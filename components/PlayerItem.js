import { View, Text, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const PlayerItem = ({ charcterName, playerName, role }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textItem}>{charcterName}</Text>
        <Text style={styles.textItem}>{playerName}</Text>
        <Text style={styles.textItem}>{role}</Text>
    </View>
  )
}

export default PlayerItem

const styles = StyleSheet.create({
    container: {
      backgroundColor: ColorPalette.primary,
      paddingVertical: 20,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: ColorPalette.OSShadow,
      elevation: 8,
    },
    textItem: {
      color: ColorPalette.titleFont
    }
})