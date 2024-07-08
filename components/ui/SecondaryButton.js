import { View, Text, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'


const SecondaryButton = ({ children, onPress }) => {
    const {height, width} = useWindowDimensions()
    const paddingHorizontal = height < 400 ? 80 : 24

  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
        onPress={onPress} 
        style={[styles.buttonInnerContainer, 
        {paddingHorizontal: paddingHorizontal}]} 
        android_ripple={{color: ColorPalette.lightRipple}}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
  )
}

export default SecondaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: ColorPalette.primary,
        alignItems: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: ColorPalette.OSShadow,
        elevation: 2,
    },

    buttonText: {
        fontSize: 16,
        color: ColorPalette.titleFont,
        fontWeight: '400',
    },
})