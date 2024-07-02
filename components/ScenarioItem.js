import { View, Text, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const ScenarioItem = ({ title, goal }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.textItem}>{title}</Text>
        <Text style={styles.textItem}>{goal}</Text>
    </View>
  )
}

export default ScenarioItem

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