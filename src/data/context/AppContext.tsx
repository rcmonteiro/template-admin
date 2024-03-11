'use client'

import { createContext, useState } from "react";

type Theme = 'dark' | null

interface AppContextProps {
  theme: Theme
  toggleTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
  theme: null
})

export const AppProvider = ({children}:any) => {

  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    setTheme(theme ? null : 'dark')
  }

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext