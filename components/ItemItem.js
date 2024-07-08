import { View, Text, Image, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const ItemItem = ({ imageUrl, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{title}</Text>
      <Image source={{uri: imageUrl}} style={styles.image}/>
    </View>
  )
}

export default ItemItem

const styles = StyleSheet.create({
    container: {
      margin: 20,
      // alignItems: 'center',
      backgroundColor: ColorPalette.primary,
      borderColor: ColorPalette.OSShadow,
      borderWidth: 1,
      borderRadius: 8,
      elevation: 8,
    },

    image: {
      width: 150,
      height: 262.5,
    },
    
    textItem: {
      color: ColorPalette.titleFont,
      marginBottom: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    }
})