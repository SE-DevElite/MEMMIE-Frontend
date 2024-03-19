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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZWU0MTZiZGYtZGYyNS00NGExLTk4YzEtYzQwZmM3MThjNGJjIiwiZW1haWwiOiJwbG95a2Fub2t3YW40NkBnbWFpbC5jb20iLCJpYXQiOjE3MTA4NDUxNzYsImV4cCI6MTcxMjA1NDc3Nn0.ZeH02t7r2q8M7R29-Le8ubg_SaHc7mNrpCQj2-sGdCo'

    // const accessToken = await AsyncStorage.getItem('access_token')
    console.log('get access token from local: ', accessToken)
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
