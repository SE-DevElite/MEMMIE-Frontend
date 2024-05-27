import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveAccessToken = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem('access_token', accessToken).then(() => {
      console.log('access token saved')
    })
  } catch (error) {
    console.error('Error saving access token:', error)
  }
}

export const getAccessToken = async () => {
  try {
    // const accessToken =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZWYyM2MzNzQtOGY5Yy00OWI1LWE5MjItOWMxN2E3MzUxMGViIiwiZW1haWwiOiJudXR0aGFub24udGhvQGdtYWlsLmNvbSIsImlhdCI6MTcxNDYzMDUwMCwiZXhwIjoxNzE1ODQwMTAwfQ.JMQzih5KymQlGs-yFJta6uuGDz_SqqvEVL0P7Bbf84o'
    const accessToken = await AsyncStorage.getItem('access_token')

    return accessToken
  } catch (error) {
    console.error('Error retrieving access token:', error)
  }
}

export const deleteAccessToken = async () => {
  try {
    await AsyncStorage.removeItem('access_token')
    console.log('access token removed')
  } catch (error) {
    console.error('Error deleting access token:', error)
  }
}
