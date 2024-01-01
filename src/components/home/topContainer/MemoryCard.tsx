import React from 'react'
import styled from 'styled-components/native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const MemoryCard: React.FC = () => {
  return (
    <Box>
      <BoxTitle></BoxTitle>
    </Box>
  )
}

export default MemoryCard

const Box = styled.View`
  flex: 1;
  border: 1px solid blue;
`

const BoxTitle = styled.View`
  height: 41px;
  border: 1px solid green;
`
