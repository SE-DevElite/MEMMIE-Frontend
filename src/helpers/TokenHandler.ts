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
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMDY1MjQyOTctNTYyYS00N2JjLWFjODAtYzFlZmY2MTVjZDA1IiwiZW1haWwiOiJudXR0aGFub24udGhvQGdtYWlsLmNvbSIsImlhdCI6MTcwNzc2MDM3MCwiZXhwIjoxNzEwMzUyMzcwfQ.uwLJfT9Es-yhKqjP6YHak_sfKPIiMQ7NTdrMSyvPyH0'

    const accessToken = await AsyncStorage.getItem('access_token')
    console.log(accessToken)
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
