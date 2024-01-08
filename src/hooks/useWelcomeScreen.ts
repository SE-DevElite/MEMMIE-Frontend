import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useWelcomeScreen = () => {
  const [isFirstOpen, setIsFirstOpen] = useState<boolean | null>(null)

  useEffect(() => {
    const checkFirstOpen = async () => {
      try {
        // Check if the app has been opened before
        const value = await AsyncStorage.getItem('isFirstOpen')

        if (value === null) {
          // App is opened for the first time
          setIsFirstOpen(true)

          // Set the flag to indicate that the app has been opened
          await AsyncStorage.setItem('isFirstOpen', 'false')
        } else {
          // App has been opened before
          setIsFirstOpen(false)
        }
      } catch (error) {
        // Handle errors if any
        console.error('Error checking first open:', error)
      }
    }

    checkFirstOpen()
  }, [])

  return isFirstOpen
}

export default useWelcomeScreen
