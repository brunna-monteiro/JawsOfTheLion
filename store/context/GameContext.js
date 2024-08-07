import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GameContext = createContext()

export function GameProvider({ children }) {
  /**
   * currentGame
   * {
   *  id: string,
   *  campaignName: string,
   *  players: [
   *   { name: string, character: string }
   *  ],
   *  events: [
   *   { id: number, choice: null | string }
   *  ]
   * }
   */
  const [ games, setGames ] = useState([])
  const [ currentGame, setCurrentGame ] = useState()
  const [ currentEvents, setCurrentEvents ] = useState([])
  const findGameById = (id) => {
    const game = games.find(game => game?.id === id)
    if (!game) return undefined
    setCurrentGame(game)
    setCurrentEvents(game.events)
    return game
  }

  const updateEvent = (eventId) => {
    const selectedEvent = currentEvents.find(event => event.id == eventId)
    if (!selectedEvent) return

    let newChoice = null
    if (selectedEvent.choice === null) newChoice = 'A'
    else if (selectedEvent.choice === 'A') newChoice = 'B'
    selectedEvent.choice = newChoice
    
    const newEventsList = [ ...currentEvents ]
    newEventsList.splice(selectedEvent.id - 1, 1, selectedEvent)
    setCurrentEvents(newEventsList)
  }


  const gameIds = Array.isArray(games) && games.map(game => game?.id)

  const [ gameData, setGameData ] = useState({})
  const [ gameId, setGameId ] = useState('')
  const [ state, setState ] = useState({checkEvent: ''})
  const [ events, setEvents ] = useState([])
  const [playerData, setPlayerData] = useState([])

  const toggleEvent = (eventNumber) => {
    const toggledEvent = events.find(event => event.id === eventNumber) || {}
    if (!toggledEvent.id) {
      toggledEvent.id = eventNumber
      toggledEvent.gameIds = [gameIds]
      toggledEvent.choice = null
    }

    switch (toggledEvent.choice) {
      case null:
        toggledEvent.choice = 'A'
        break
      case 'A':
        toggledEvent.choice = 'B'
        break
      case 'B':
        toggledEvent.choice = null
        break
      default:
        throw new Error('Invalid case')
    }

    return toggledEvent
  }

  const updateEventsList = (eventNumber) => {
    setEvents((currentState => {
      const event = toggleEvent(eventNumber)
      const editedEvents = currentState.filter(e => e.id !== eventNumber)
      return [
        ...editedEvents,
        event
      ]
    }))
  }

  // Return an array of ids for multiple games
  const getAvailableGames = async () => {
    try {
      const availableGames = await AsyncStorage.getItem('avialableGames')
      if (!availableGames) {
        await AsyncStorage.setItem('availableGameIds', JSON.stringify([]))
        return []
      }
      return availableGames
    } catch (e) {
      console.error(e)
    }
  }

   // Load state from AsyncStorage
  //  useEffect(() => {
  //   const loadState = async () => {
  //     try {
  //       const savedState = await AsyncStorage.getItem('appState') // gameId
  //       if (savedState) {
  //         setState(JSON.parse(savedState))
  //       }
  //     } catch (error) {
  //       console.error('Failed to load state:', error)
  //     }
  //   }
  //   loadState()
  // }, [])

  // // Save state to AsyncStorage whenever it changes
  // useEffect(() => {
  //   const saveState = async () => {
  //     try {
  //       await AsyncStorage.setItem('appState', JSON.stringify(state))
  //     } catch (error) {
  //       console.error('Failed to save state:', error)
  //     }
  //   }
  //   saveState()
  // }, [state])

  const value = {
    currentEvents,
    updateEvent,
    games,
    events,
    setEvents,
    updateEventsList,
    setGames,
    findGameById,
    setGameData,
    gameId,
    setGameId,
    gameData,
    currentGame,
    getAvailableGames,
  }
  // {games, setGames, gameIds, findGameById, playerData, setPlayerData, gameId, setGameId, gameData, setGameData, state, setState, getAvailableGames, events, setEvents, toggleEvent, updateEventsList }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  return useContext(GameContext)
}

