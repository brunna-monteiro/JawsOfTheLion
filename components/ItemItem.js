import { View, Text, Image, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const ItemItem = ({ imageUrl, title, acquired, availability }) => {
  return (
    <View style={styles.container}>
      <Image souce={{uri: {imageUrl}}}/>
      <Text style={styles.textItem}>{title}</Text>
      <Text style={styles.textItem}>Acquired: {acquired}</Text>
      <Text style={styles.textItem}>Available: {availability}</Text>
    </View>
  )
}

export default ItemItem

const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      alignItems: 'center',
      backgroundColor: ColorPalette.primary,
      borderColor: ColorPalette.OSShadow,
      borderWidth: 1,
      borderRadius: 8,
      elevation: 8,
    },
    
    textItem: {
      color: ColorPalette.titleFont
    }
})