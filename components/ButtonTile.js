import { Pressable, View, StyleSheet, Platform } from 'react-native'
import BodyText from '../components/ui/BodyText'
import TitleText from './ui/TitleText'
import ColorPalette from '../constants/ColorPalette'

const ButtonTile = ({title, player, onPress}) => {
  return (
    <View style={styles.outterContainer}>
      <Pressable android_ripple={{color: ColorPalette.darkRipple}} 
      style={({ pressed }) => [
        styles.button, pressed ? styles.buttonPressed : null,]} 
        onPress={onPress}>
        <View style={[styles.innerContainer]}>
          <TitleText>{title}</TitleText>
          <View>{player}</View>
        </View>
      </Pressable>
    </View>
  )
}

export default ButtonTile

const styles = StyleSheet.create({
  outterContainer: {
    margin: 10,
    height: 250,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    // ioS shadow
    backgroundColor: ColorPalette.boxLight,
    shadowColor: ColorPalette.OSShadow,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,

  },
  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.6,
  },

  innerContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

})