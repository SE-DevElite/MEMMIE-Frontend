import React, { useEffect } from 'react'
import SignInHeading from '@/components/signin/SignInHeading'
import FormSubmit from '@/components/signin/FormSubmit'
import ButtonGroupService from '@/components/signin/ButtonGroupService'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { RequestWithToken } from '@/api/DefaultRequest'
import { getAccessToken } from '@/helpers/TokenHandler'

const SignInScreen: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    async function alreadyAuthen() {
      const token = await getAccessToken()
      const res = await RequestWithToken(token as string)
        .get('/auth/checkToken')
        .then(res => res.data)

      if (!res.error) {
        navigation.navigate('HomeScreen' as never)
      }
    }

    alreadyAuthen()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SignInHeading />
        <FormSubmit
          onPressSignIn={() => navigation.navigate('HomeScreen' as never)}
        />
        <ButtonGroupService />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  }
})
