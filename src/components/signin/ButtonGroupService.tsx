import React from 'react'
import ButtonCommon from '@/common/Button.common'
import { View, StyleSheet } from 'react-native'
import { DEFAULT_URL } from '@/api/DefaultRequest'
import * as WebBrowser from 'expo-web-browser'
import * as Linking from 'expo-linking'
import { saveAccessToken } from '@/helpers/TokenHandler'
import { useNavigation } from '@react-navigation/native'

const ButtonGroupService: React.FC = () => {
  const navigation = useNavigation()

  const handleGoogleSignIn = async () => {
    const redirectUrl = Linking.makeUrl('')
    const authUrl = `${DEFAULT_URL}/auth/google/redirect`

    const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUrl)

    if (result.type === 'success') {
      const access_token = result.url.split('?')[1].split('=')[1]

      if (access_token) {
        saveAccessToken(access_token)
        navigation.navigate('HomeScreen' as never)
      }
    }
  }

  return (
    <View style={styles.container}>
      <ButtonCommon
        title="Continue with Google"
        onPress={handleGoogleSignIn}
        width={300}
        height={41}
        font_size={14}
        background_color="#e5e5e5e5"
        prefix_icon={require('@/assets/icons/google-logo.png')}
      />
      {/* <ButtonCommon
        title="Continue with Facebook"
        onPress={() => console.log('sign in Facebook')}
        width={300}
        height={41}
        font_size={14}
        background_color="#e5e5e5e5"
        prefix_icon={require('@/assets/icons/facebook-logo.png')}
      /> */}
      {/* <ButtonCommon
        title="Continue with Apple"
        onPress={() => console.log('sign in Apple')}
        width={300}
        height={41}
        font_size={14}
        background_color="#e5e5e5e5"
        prefix_icon={require('@/assets/icons/apple-logo.png')}
      /> */}
    </View>
  )
}

export default ButtonGroupService

const styles = StyleSheet.create({
  container: {
    gap: 10
  }
})
