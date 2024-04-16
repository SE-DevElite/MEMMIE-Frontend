import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexWelcomeScreen from '@/screens/welcome/IndexWelcomeScreen'
import HomeScreen from '@/screens/HomeScreen'
import ProfileScreen from '@/screens/ProfileScreen'
import SignInScreen from '@/screens/SignInScreen'
import SettingScreen from '@/screens/SettingScreen'
import EmailScreen from '@/screens/setting/EmailScreen'
import DateOfBirthScreen from '@/screens/setting/DateOfBirthScreen'
import PasswordScreen from '@/screens/setting/PasswordScreen'
import LinkAccount from '@/screens/setting/LinkedAccountScreen'
import Friendlist from '@/screens/setting/FriendlistScreen'
import CreateList from '@/components/setting/CreateList'
import PushNotificationScreen from '@/screens/setting/PushNotificationScreen'
import WidgetScreen from '@/screens/setting/WidgetScreen'
import ReportScreen from '@/screens/setting/ReportScreen'
import SupportScreen from '@/screens/setting/SupportScreen'
import TermsScreen from '@/screens/setting/TermsScreen'
import SearchScreen from '@/screens/SearchScreen'
import FindFriendScreen from '@/screens/FindFriendScreen'
import useWelcomeScreen from '@/hooks/useWelcomeScreen'
import { useState } from 'react'
import MapStoryScreen from '@/screens/MapStoryScreen'
import FriendProfileScreen from '@/screens/FriendProfile'
import LockScreenWidget from '@/screens/setting/LockScreenWidget'

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
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="DateOfBirthScreen" component={DateOfBirthScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="LinkedAccountScreen" component={LinkAccount} />
      <Stack.Screen name="FriendlistScreen" component={Friendlist} />
      <Stack.Screen
        name="PushNotificationScreen"
        component={PushNotificationScreen}
      />
      <Stack.Screen name="WidgetScreen" component={WidgetScreen} />
      <Stack.Screen name="ReportScreen" component={ReportScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="TermsScreen" component={TermsScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FindFriendScreen" component={FindFriendScreen} />
      <Stack.Screen name="MapStoryScreen" component={MapStoryScreen} />
      <Stack.Screen
        name="FriendProfileScreen"
        component={FriendProfileScreen}
      />
      <Stack.Screen name="LockScreenWidget" component={LockScreenWidget}/>
    </Stack.Navigator>
  )
}

export default AppNavigator
