import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import ColorPalette from '../../constants/ColorPalette'
import { useFonts } from 'expo-font'

const MainText = ({ children, style }) => {
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
    },

    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })