import { View, Text, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native'
import { useFonts } from 'expo-font'
import ColorPalette from '../../constants/ColorPalette'

const TitleText = ({children, style}) => {
  const {height, width} = useWindowDimensions()
  const marginVertical = height < 400 ? 10 : '5%'
  const [fontsLoaded, error] = useFonts({
    MedievalSharp: require('../../assets/fonts/MedievalSharp-Regular.ttf'),
  })

  if (!fontsLoaded) {
    // Show a loading indicator while fonts are loading
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color={ColorPalette.activeIcon} />
      </View>
    )
  }

  if (error) {
    console.error('Error loading font', error)
    return <Text style={[styles.main, style]}>Error loading font</Text>
  }

  return (
    <ImageBackground 
    source={require('../../assets/images/bluebanner.png')} 
    resizeMode='stretch'
    style={styles.banner}>
      <Text style={[styles.title, style, {marginVertical: marginVertical}]}>{children}</Text>
    </ImageBackground>
  )
}

export default TitleText


const styles = StyleSheet.create({
    banner: {
      width: 350,
    },

    title: {
      fontFamily: 'MedievalSharp',
      fontSize: 28,
      color: ColorPalette.titleFont,
      textAlign: 'center',
      marginBottom: 30
    },

    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })