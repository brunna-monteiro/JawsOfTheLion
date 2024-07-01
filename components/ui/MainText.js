import { Text, StyleSheet, useWindowDimensions } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'
import { useFonts } from 'expo-font'

const MainText = ({children, style}) => {
    // const {width, height} = useWindowDimensions()
    // const marginText = height < 400 ? 0 : 0
    const [fontsLoaded, fontError] = useFonts({
      'MedievalSharp': require('../../assets/fonts/MedievalSharp-Regular.ttf')})
  
    return (
      <Text style= {[styles.main, style]}>{children}</Text>
    )
  }

export default MainText

const styles = StyleSheet.create({

    main: {
      fontFamily: 'MedievalSharp',
      fontSize: 28,
      color: ColorPalette.mainFont,
      textAlign: 'center',
      marginBottom: '5%',
    }
  })