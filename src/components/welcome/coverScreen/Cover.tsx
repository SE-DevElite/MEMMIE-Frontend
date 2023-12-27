import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

const Cover: React.FC = () => {
  return (
    <Box>
      <Header>MEMMIE</Header>
      <SubHeader>your map diary</SubHeader>
    </Box>
  )
}

export default Cover

const Box = styled(View)`
  align-items: center;
  justify-content: center;

  /* background-color: #f5f5f5; */
`

const Header = styled(Text)`
  font-family: ${themes.fonts.medium};
  font-size: 36px;
  color: rgba(${themes.light.primary.rgb}, 0.7);
`

const SubHeader = styled(Text)`
  font-family: ${themes.fonts.regular};
  font-size: 16px;
  color: rgba(${themes.light.primary.rgb}, 0.7);
`
