import React, { useState } from 'react'
import { View, Text, TextInput, Button, Picker } from 'react-native'
import { useGame } from './GameContext'
import { useNavigation } from '@react-navigation/native'

const NewGameForm = () => {
  const [campaignName, setCampaignName] = useState('');
  const [numPlayers, setNumPlayers] = useState(1);
  const [players, setPlayers] = useState([{ name: '', character: '' }]);
  const { state, setState } = useGame();
  const navigation = useNavigation();

  const characters = ['Demolitionist', 'Voidwarden', 'Hatchet', 'Red Guard'];

  const handleNumPlayersChange = (value) => {
    setNumPlayers(value);
    setPlayers(Array.from({ length: value }, () => ({ name: '', character: '' })));
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value
    setPlayers(newPlayers)
  }

  const handleSubmit = () => {
    const newGameId = `game_${Date.now()}` // Generate a unique ID
    const newGame = {
      id: newGameId,
      campaignName,
      players
    };
    setState({ ...state, games: [...(state.games || []), newGame] });
    navigation.navigate('GameOverviewScreen', { gameId: newGameId });
  };

  return (
    <View>
      <Text>Campaign Name</Text>
      <TextInput value={campaignName} onChangeText={setCampaignName} />

      <Text>Number of Players</Text>
      <Picker selectedValue={numPlayers} onValueChange={handleNumPlayersChange}>
        {[1, 2, 3, 4].map((num) => (
          <Picker.Item key={num} label={`${num}`} value={num} />
        ))}
      </Picker>

      {players.map((player, index) => (
        <View key={index}>
          <Text>Player {index + 1} Name</Text>
          <TextInput
            value={player.name}
            onChangeText={(value) => handlePlayerChange(index, 'name', value)}
          />

          <Text>Character</Text>
          <Picker
            selectedValue={player.character}
            onValueChange={(value) => handlePlayerChange(index, 'character', value)}
          >
            {characters.map((char) => (
              <Picker.Item key={char} label={char} value={char} />
            ))}
          </Picker>
        </View>
      ))}

      <Button title="Create Game" onPress={handleSubmit} />
    </View>
  );
}

export default NewGameForm;
