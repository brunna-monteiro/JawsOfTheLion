import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'
import { useState } from 'react'
import ColorPalette from '../constants/ColorPalette'

const EventInput = (props) => {
  const [enteredEventNum, setEnteredEventNum] = useState('')

  function addEventHandler() {
    props.onAddEvent(enteredEventNum)
    setEnteredEventNum('')
  }

  return (
    <View style={styles.buttonContainer}>
      <TextInput onChangeText={setEnteredEventNum} 
      style={styles.textInput} 
      placeholder='Type Event Number'
      value={enteredEventNum}/>
      <View style={styles.buttonGo}>
        <Button onPress={addEventHandler} title='Check Event' color={ColorPalette.primary}/>
      </View>
    </View>
  )
}

export default EventInput

const styles = StyleSheet.create({

    textInput: {
      borderWidth: 1,
      borderColor: ColorPalette.bgsecondary,
      backgroundColor: ColorPalette.bglight,
      borderRadius: 8,
    },

    buttonContainer: {
      flexDirection: 'row',
    },
})