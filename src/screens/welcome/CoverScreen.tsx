import React from 'react'
import styled from 'styled-components/native'
import Cover from '@/components/welcome/coverScreen/Cover'
import EllipseCircle from '@/components/welcome/EllipseCircle'
import { TouchableWithoutFeedback } from 'react-native'

interface CoverScreenProps {
  handleStage: (id: number) => void
}

const CoverScreen: React.FC<CoverScreenProps> = props => {
  const { handleStage } = props

  return (
    <Center>
      <TouchableWithoutFeedback onPress={() => handleStage(1)}>
        <ChildCenter>
          <Cover />

          <EllipseCircle top1={15} top2={-15} right1={-20} right2={25} />
        </ChildCenter>
      </TouchableWithoutFeedback>
    </Center>
  )
}

export default CoverScreen

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  /* border: 1px solid red; */
`

const ChildCenter = styled.View`
  align-items: center;
  justify-content: center;

  /* border: 1px solid green; */
`
