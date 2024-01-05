import React, { useState } from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import InputUnderlineCommon from '@/common/InputUnderline.common'
import ButtonCommon from '@/common/Button.common'

const FormSubmit: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Box>
      <Flex>
        <FlexInput>
          <InputUnderlineCommon
            placeholder="Email address"
            handleChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
          <InputUnderlineCommon
            placeholder="Password"
            handleChangeText={setPassword}
            value={password}
            keyboardType="default"
            secureTextEntry={true}
          />
        </FlexInput>
        <BoxText>
          <TouchableOpacity onPress={() => console.log('Forgot password')}>
            <TextStyle>Forgot password?</TextStyle>
          </TouchableOpacity>
        </BoxText>
      </Flex>

      <ButtonCommon
        title="Sign in"
        onPress={() => console.log('sign in')}
        width={300}
        height={41}
        font_size={14}
      />
    </Box>
  )
}

export default FormSubmit

const Box = styled.View`
  gap: 40px;

  /* background-color: red; */
`

const Flex = styled.View`
  gap: 15px;
`

const FlexInput = styled.View`
  gap: 15px;
`

const BoxText = styled.View`
  align-items: flex-end;
  /* background-color: blue; */
`

const TextStyle = styled.Text`
  color: ${themes.light.primary.hex};
  font-family: ${themes.fonts.medium};
  font-size: 12px;
`
