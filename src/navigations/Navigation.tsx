import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexWelcomeScreen from '@/screens/welcome/IndexWelcomeScreen'
import HomeScreen from '@/screens/HomeScreen'
import ProfileScreen from '@/screens/ProfileScreen'
import SignInScreen from '@/screens/SignInScreen';
import SignInScreen from '@/screens/SignInScreen'
import useWelcomeScreen from '@/hooks/useWelcomeScreen'
import { useState } from 'react'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  const isFirstOpen = useWelcomeScreen()
  const [showWelcome, setShowWelcome] = useState<boolean | null>(isFirstOpen)

  return (
    <Stack.Navigator
      initialRouteName={showWelcome ? 'IndexWelcomeScreen' : 'SignInScreen'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="IndexWelcomeScreen" component={IndexWelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator
