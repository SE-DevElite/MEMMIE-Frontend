import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexWelcomeScreen from '@/screens/welcome/IndexWelcomeScreen'
import HomeScreen from '@/screens/HomeScreen'
import ProfileScreen from '@/screens/ProfileScreen'
import SignInScreen from '@/screens/SignInScreen'
import SettingScreen from '@/screens/SettingScreen'
import useWelcomeScreen from '@/hooks/useWelcomeScreen'
import { useState } from 'react'
import MapStoryScreen from '@/screens/MapStoryScreen'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  const isFirstOpen = useWelcomeScreen()
  const [showWelcome, setShowWelcome] = useState<boolean | null>(isFirstOpen)

  return (
    <Stack.Navigator
      initialRouteName={showWelcome ? 'IndexWelcomeScreen' : 'MapStoryScreen'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="IndexWelcomeScreen" component={IndexWelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="MapStoryScreen" component={MapStoryScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
