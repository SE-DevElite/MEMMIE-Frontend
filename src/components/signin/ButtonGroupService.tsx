import React from 'react'
import styled from 'styled-components/native'
import ButtonCommon from '@/common/Button.common'
import { themes } from '@/common/themes/themes'

const ButtonGroupService: React.FC = () => {
  return (
    <Box>
      <ButtonCommon
        title="Continue with Google"
        onPress={() => console.log('sign in Google')}
        width={300}
        height={41}
        font_size={14}
        background_color="#e5e5e5e5"
        prefix_icon={require('@/assets/icons/google-logo.png')}
      />
      <ButtonCommon
        title="Continue with Facebook"
        onPress={() => console.log('sign in Facebook')}
        width={300}
        height={41}
        font_size={14}
        background_color="#e5e5e5e5"
        prefix_icon={require('@/assets/icons/facebook-logo.png')}
      />
      <ButtonCommon
        title="Continue with Apple"
        onPress={() => console.log('sign in Apple')}
        width={300}
        height={41}
        font_size={14}
        background_color="#e5e5e5e5"
        prefix_icon={require('@/assets/icons/apple-logo.png')}
      />
    </Box>
  )
}

export default ButtonGroupService

const Box = styled.View`
  gap: 10px;
`
