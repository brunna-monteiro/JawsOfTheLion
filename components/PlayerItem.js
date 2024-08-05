import { View, Text, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const PlayerItem = ({ name, character }) => {
  return (
    <View style={styles.container}>

      <View style={styles.flexbox}>
        <Text style={styles.propsName}>Player's Name: </Text>
        <Text style={styles.textItem}> {name}</Text>
      </View>

      <View style={styles.flexbox}>
        <Text style={styles.propsName}>Role: </Text>
        <Text style={styles.textItem}>{character}</Text>
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