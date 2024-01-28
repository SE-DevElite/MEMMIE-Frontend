import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveAccessToken = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem('access_token', accessToken)
  } catch (error) {
    console.error('Error saving access token:', error)
  }
}

export const getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('access_token')
    return accessToken
  } catch (error) {
    console.error('Error retrieving access token:', error)
  }
}
