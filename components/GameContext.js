import { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GameContext = createContext()

export function GameProvider({ children }) {
  const [gameIds, setGameIds] = useState(null)
  const [state, setState] = useState({checkEvent: ''})
  const [ events, setEvents ] = useState([])

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

  // retorna array de ids
  const getAvailableGames = async () => {
    try {
      /**
       * {
       *  id: string,
       *  title: string,
       *  players: []
       * }
       */
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

   // Load state from AsyncStorage when the app starts
   useEffect(() => {
    const loadState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('appState') // gameId
        if (savedState) {
          setState(JSON.parse(savedState))
        }
      } catch (error) {
        console.error('Failed to load state:', error)
      }
    };
    loadState()
  }, [])

  // Save state to AsyncStorage whenever it changes
  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('appState', JSON.stringify(state))
      } catch (error) {
        console.error('Failed to save state:', error)
      }
    };
    saveState()
  }, [state])

  return (
    <GameContext.Provider value={{ gameIds, setGameIds, state, setState, getAvailableGames, events, setEvents, toggleEvent, updateEventsList }}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to use the context
export function useGame() {
  return useContext(GameContext)
}

