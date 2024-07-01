import { View, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'
import MainText from './MainText'


const PrimaryButton = ({ children, onPress }) => {
    const {height, width} = useWindowDimensions()
    const paddingHorizontal = height < 400 ? 80 : 24

  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
        onPress={onPress} 
        style={[styles.buttonInnerContainer, 
        {paddingHorizontal: paddingHorizontal}]} 
        android_ripple={{color: ColorPalette.androidRipple}}>
            <MainText>{children}</MainText>
        </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        overflow: 'hidden',
        marginHorizontal: 8,
        padding: 50,
    },

    buttonInnerContainer: {
        backgroundColor: ColorPalette.bgsecondary,
        paddingVertical: 48,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: ColorPalette.OSShadow,
        elevation: 8,
    },

    buttonText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: ColorPalette.mainFont,
    },
})