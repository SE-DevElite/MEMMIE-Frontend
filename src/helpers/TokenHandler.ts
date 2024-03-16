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
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGJkYzc3NjEtZjIzYy00YjM1LWJiOTMtOWYwMGYzZDVhOWNiIiwiZW1haWwiOiJ0aGVnb2RvaG0yOEBnbWFpbC5jb20iLCJpYXQiOjE3MTAzMzgzMDIsImV4cCI6MTcxMTU0NzkwMn0.wuJtJWpgWmnI8INSpvqV2HJV5xzq963npquFBW10b9k'
    // const accessToken = await AsyncStorage.getItem('access_token')
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
