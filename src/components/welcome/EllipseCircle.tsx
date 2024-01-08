import React from 'react'
import styled from 'styled-components/native'

interface EllipseCircleProps {
  top1: number
  right1: number

  top2: number
  right2: number
}

const EllipseCircle: React.FC<EllipseCircleProps> = props => {
  const { top1, right1, top2, right2 } = props

  return (
    <Box>
      <ImageCustom
        source={require('@/assets/welcome/Ellipse.png')}
        top={top1}
        right={right1}
      />
      <ImageCustom
        source={require('@/assets/welcome/Ellipse.png')}
        top={top2}
        right={right2}
      />
    </Box>
  )
}

export default EllipseCircle

const Box = styled.View`
  position: absolute;
  /* width: 100%; */

  /* border: 1px solid red; */
`

const ImageCustom = styled.Image`
  /* position: absolute; */
  top: ${(props: { top: number }) => props.top}%;
  right: ${(props: { right: number }) => props.right}%;
`
