import React from 'react'
import styled from 'styled-components/native'
import SignInHeading from '@/components/signin/SignInHeading'
import FormSubmit from '@/components/signin/FormSubmit'
import ButtonGroupService from '@/components/signin/ButtonGroupService'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const SignInScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Center>
        <SignInHeading />
        <FormSubmit />
        <ButtonGroupService />
      </Center>
    </TouchableWithoutFeedback>
  )
}

export default SignInScreen

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */

  gap: 40px;
`
