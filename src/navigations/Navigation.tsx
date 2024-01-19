import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexWelcomeScreen from '@/screens/welcome/IndexWelcomeScreen';
import HomeScreen from '@/screens/HomeScreen';
import ProfileScreen from '@/screens/ProfileScreen'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="IndexWelcomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="IndexWelcomeScreen" component={IndexWelcomeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
