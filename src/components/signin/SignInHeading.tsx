import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import AvatarCommon from '@/common/Avatar.common'
import { themes } from '@/common/themes/themes'

const SignInHeading: React.FC = () => {
  return (
    <Center>
      <AvatarCommon
        image={require('@/assets/memmies-with-heart.png')}
        width={150}
        height={150}
      />
      <View>
        <TextStyle>Sign in</TextStyle>
      </View>
    </Center>
  )
}

export default SignInHeading

const Center = styled.View`
  justify-content: center;
  align-items: center;

  gap: 40px;

  /* background-color: pink; */
`

const TextStyle = styled.Text`
  font-size: 20px;
  font-family: ${themes.fonts.samiBold};
  color: ${themes.light.primary.hex};
`
