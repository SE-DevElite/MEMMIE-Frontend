import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexWelcomeScreen from '@/screens/welcome/IndexWelcomeScreen';
import HomeScreen from '@/screens/HomeScreen';
import ProfileScreen from '@/screens/ProfileScreen'
import SignInScreen from '@/screens/SignInScreen';
import SettingScreen from '@/screens/SettingScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="IndexWelcomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="IndexWelcomeScreen" component={IndexWelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
