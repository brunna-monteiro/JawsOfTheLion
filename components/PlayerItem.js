import { View, Text, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const PlayerItem = ({ characterName, playerName, role }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <Text style={styles.propsName}>Charater's Name: </Text>
        <Text style={styles.textItem}>{characterName}</Text>
      </View>

      <View style={styles.flexbox}>
        <Text style={styles.propsName}>Player's Name: </Text>
        <Text style={styles.textItem}> {playerName}</Text>
      </View>

      <View style={styles.flexbox}>
        <Text style={styles.propsName}>Role: </Text>
        <Text style={styles.textItem}>{role}</Text>
      </View>
    </View>
  )
}

export default PlayerItem

const styles = StyleSheet.create({
    container: {
      backgroundColor: ColorPalette.primary,
      margin: 10,
      padding: 20,

      borderWidth: 1,
      borderRadius: 8,
      borderColor: ColorPalette.OSShadow,
      elevation: 8,
    },

    flexbox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'

    },

    propsName: {
      color: ColorPalette.propsFont,
      fontSize: 16,
      textAlign: 'left'
    },

    textItem: {
      color: ColorPalette.titleFont,
      fontSize: 16,
      textAlign: 'right'
    },

})