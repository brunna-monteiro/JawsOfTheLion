import { createContext, useContext, useState } from 'react'

const GameContext = createContext()

export function GameProvider({ children }) {
  const [gameIds, setGameIds] = useState(null);

  return (
    <GameContext.Provider value={{ gameIds, setGameIds }}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to use the context
export function useGame() {
  return useContext(GameContext)
}

