import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { ThemeProvider } from 'styled-components/native'

interface ThemeProviderProps {
  children: React.ReactNode
}

const Theme: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <ThemeProvider theme={themes[currentTheme as keyof typeof themes]}>
      {children}
    </ThemeProvider>
  )
}
export default Theme
