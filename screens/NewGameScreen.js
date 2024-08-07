import { useState } from 'react'
import { View, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import BodyText from '../components/ui/BodyText'
import ColorPalette from '../constants/ColorPalette'
import SecondaryButton from '../components/ui/SecondaryButton'
import { useGame } from '../store/context/GameContext'
import { useNavigation } from '@react-navigation/native'
import { randomId } from '../utils/randomId'

const NewGameScreen = () => {
  const { games, setGames } = useGame()

  const [campaignName, setCampaignName] = useState('')
  const [numPlayers, setNumPlayers] = useState(1)
  const [players, setPlayers] = useState([{ name: '', character: '' }])
  const navigation = useNavigation()

  const characters = ['Character', 'Demolitionist', 'Voidwarden', 'Hatchet', 'Red Guard']

  const handleNumPlayersChange = (value) => {
    setNumPlayers(value)
    setPlayers(Array.from({ length: value }, () => ({ name: '', character: '' })))
  }

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players]
    newPlayers[index][field] = value
    setPlayers(newPlayers)
  }

  const handleSubmit = () => {
    const newGameId = randomId()
    const eventsSeed = Array.from({ length: 100 }, (_value, index) => index+1);
    const events = eventsSeed.map(event => ({
        id: event,
        choice: null
      })
    )
    const newGame = {
      id: newGameId,
      campaignName,
      players,
      events
    }

    setGames([...games, newGame])
    //debbuging
    console.log('Navigating to GameSeletionScreen with newGameId:', newGameId)
    navigation.navigate('GameSelection', { newGameId })
  }

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollView}>
        {/* <KeyboardAvoidingView style={styles.root} behavior='padding'> */}
          <View style={styles.container}>
            <BodyText style={styles.text}>Campaign</BodyText>
            <TextInput style={styles.textInput} 
            value={campaignName} 
            onChangeText={setCampaignName}
            maxLength={20}
            placeholder="Name your campaign" />

            <View style={styles.buttonContainer}>
            <BodyText style= {styles.text}>Number of Players</BodyText>
            <Picker style={styles.pickerContainer} selectedValue={numPlayers} onValueChange={handleNumPlayersChange}>
              {[1, 2, 3, 4].map((num) => (
                <Picker.Item key={num} label={`${num}`} value={num} />
              ))}
            </Picker>
            </View>

            {players.map((player, index) => (
              <View key={index}>
                <BodyText style={styles.text}>Player {index + 1}</BodyText>
                <TextInput 
                  style={styles.textInput}
                  maxLength={30}
                  placeholder="Player's and Character's name"
                  value={player.name}
                  onChangeText={(value) => handlePlayerChange(index, 'name', value)}
                />

                <View style={styles.buttonContainer}>
                  <BodyText style={styles.text}>Character</BodyText>
                  <Picker style={styles.pickerContainer}
                    selectedValue={player.character}
                    onValueChange={(value) => handlePlayerChange(index, 'character', value)}
                  >
                    {characters.map((char) => (
                      <Picker.Item key={char} label={char} value={char} />))}
                  </Picker>
                </View>
              </View>
            ))}
            <SecondaryButton title="Create Game" onPress={handleSubmit}>Create Game</SecondaryButton>
          </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </View>
  )
}

export default NewGameScreen

const styles = StyleSheet.create({

  root: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 10,
  },

  scrollView: {
    flexGrow: 1
  },

  container: {
    padding: 40,
    paddingHorizontal: 16,
    backgroundColor: ColorPalette.boxLight,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: ColorPalette.OSShadow,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pickerContainer: {
    backgroundColor: ColorPalette.boxDark,
    paddingHorizontal: '30%',
    marginRight: 10,
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 10,
  },

  textInput: {
    borderWidth: 1,
    borderColor: ColorPalette.border,
    backgroundColor: ColorPalette.boxDark,
    borderRadius: 4,

    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,

    fontSize: 14,
    fontWeight: '500',
  },
})