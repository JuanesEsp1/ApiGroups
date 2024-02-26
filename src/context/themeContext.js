'use client'

import { createContext, useState } from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({ children }) {
   const [theme, setTheme] = useState('hola soy el contexto')

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}
