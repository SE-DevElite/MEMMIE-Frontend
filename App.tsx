import { View } from 'react-native'
import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import Provider from '@/provider/Provider'
import useWelcomeScreen from '@/hooks/useWelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from '@/navigations/Navigation'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession()

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  )
}

export default App
