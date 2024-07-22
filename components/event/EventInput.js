import { View, TextInput, StyleSheet } from 'react-native'
import SecondaryButton from '../ui/SecondaryButton'
import { useState } from 'react'
import ColorPalette from '../../constants/ColorPalette'

const EventInput = (props) => {
  const [enteredEventNum, setEnteredEventNum] = useState('')

  function eventHandler() {
    props.onClickEvent(enteredEventNum)
    setEnteredEventNum('')
  }

  return (
    <View style={styles.buttonContainer}>
      <TextInput 
      onChangeText={setEnteredEventNum} 
      keyboardType='number-pad'
      maxLength={3}
      style={styles.textInput} 
      placeholder='nº'
      value={enteredEventNum}/>
      <View style={styles.buttonGo}>
        <SecondaryButton 
        onPress={eventHandler}>
          Check
        </SecondaryButton>
      </View>
    </View>
  )
}

export default EventInput

const styles = StyleSheet.create({

    textInput: {
      borderWidth: 1,
      borderColor: ColorPalette.border,
      backgroundColor: ColorPalette.boxDark,
      borderRadius: 8,

      paddingVertical: 5,
      paddingHorizontal: 20,
      marginHorizontal: 10,

      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center'
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
    },
})