import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import useWelcomeScreen from '@/hooks/useWelcomeScreen'
import IndexWelcomeScreen from '@/screens/welcome/IndexWelcomeScreen'
import SignInScreen from '@/screens/SignInScreen'
import HomeScreen from '@/screens/HomeScreen'

const App: React.FC = () => {
  const isFirstOpen = useWelcomeScreen()
  const [showWelcome, setShowWelcome] = useState<boolean | null>(isFirstOpen)

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf')
  })

  if (!fontsLoaded) {
    // Font loading is in progress
    return null // or a loading indicator
  }

  const handleShowWelcome = () => {
    setShowWelcome(false)
  }

  return (
    <View style={{ flex: 1 }}>
      {/* {showWelcome ? <IndexWelcomeScreen /> : <SignInScreen />} */}

      {/* <SignInScreen /> */}
      {/* <IndexWelcomeScreen /> */}
      <HomeScreen />
    </View>
  )
}

export default App
