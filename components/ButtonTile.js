import { Pressable, View, StyleSheet, Platform } from 'react-native'
import BodyText from '../components/ui/BodyText'
import TitleText from './ui/TitleText'
import ColorPalette from '../constants/ColorPalette'

const ButtonTile = ({title, player}) => {
  return (
    <View style={styles.outterContainer}>
        <Pressable android_ripple={{color: '#ccc'}} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}>
            <View style={[styles.innerContainer]}>
                <TitleText>{title}</TitleText>
                <BodyText>{player}</BodyText>
            </View>
        </Pressable>
    </View>
  )
}

export default ButtonTile

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    margin: 16,
    height: 200,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    // ioS shadow
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,

  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    backgroundColor: ColorPalette.bglight,
  },
})