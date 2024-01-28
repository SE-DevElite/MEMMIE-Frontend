import React from 'react'
import SignInHeading from '@/components/signin/SignInHeading'
import FormSubmit from '@/components/signin/FormSubmit'
import ButtonGroupService from '@/components/signin/ButtonGroupService'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'

const SignInScreen: React.FC = () => {
  const navigation = useNavigation()

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
