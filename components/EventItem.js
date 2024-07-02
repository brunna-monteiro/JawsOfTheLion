import { View, Text, StyleSheet } from 'react-native'
import ColorPalette from '../constants/ColorPalette'

const EventItem = ({ id }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{id}</Text>
    </View>
  )
}

export default EventItem

const styles = StyleSheet.create({
    container: {
        borderColor: ColorPalette.androidRipple,
        borderWidth: 1,
        borderRadius: 8,
        padding: 20,
        marginVertical: 8,
        backgroundColor: ColorPalette.primary,
    },

    text: {
        color: ColorPalette.titleFont,
        fontSize: 16,
    }
})