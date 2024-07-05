import { View, Text, Image, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const ItemItem = ({ imageUrl, title }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl.imageUrl}}/>
      <Text style={styles.textItem}>{title}</Text>
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