import { Pressable, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

function IconButton({ icon, color, bgColor, style, onPress }) {

  return (
    <Pressable 
    onPress={onPress} 
    style={({ pressed }) => pressed && styles.pressed}>
      <Feather name={icon} size={24} color={color} backgroundColor={bgColor} style={style}/>
    </Pressable>

  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    borderRadius: 8, 
    opacity: 0.7,
  }
})


