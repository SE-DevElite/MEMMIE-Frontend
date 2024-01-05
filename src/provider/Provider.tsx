import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={themes[currentTheme as keyof typeof themes]}>
            {children}
          </ThemeProvider>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
export default Provider
