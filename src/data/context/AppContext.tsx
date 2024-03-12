'use client'

import { createContext, useEffect, useState } from "react";

type Theme = 'dark' | 'light'

interface AppContextProps {
  theme: Theme
  toggleTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
  theme: 'dark'
})

export const AppProvider = ({children}:any) => {

  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('template-admin-theme',newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    let savedTheme: Theme = 'dark'
    if (localStorage.getItem('template-admin-theme') === 'dark') {
      savedTheme = 'dark'
    } else {
      savedTheme = 'light'
    }
    setTheme(savedTheme)
  },[])

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