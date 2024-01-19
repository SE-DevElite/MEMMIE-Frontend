import React from 'react'
import styled from 'styled-components/native'

interface NavigationButtonProps {
  active?: number
  pageChange: (id: number) => void
}

const NavigationButton: React.FC<NavigationButtonProps> = props => {
  const { active, pageChange } = props

  const handlePress = (id: number) => {
    // log id of the circle
    // console.log(id);
    pageChange(id)
  }

  return (
    <Box>
      {Array.from({ length: 5 }).map((_, i) => (
        <Circle key={i} active={active === i} onPress={() => handlePress(i)} />
      ))}
    </Box>
  )
}

export default NavigationButton

const Box = styled.View`
  position: absolute;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: row;
  bottom: 100px;

  /* border: 1px solid green; */
`

const Circle = styled.TouchableOpacity`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 1.5px solid #a56073;
  /* background-color: #a56073; */
  background-color: ${(props: { active: string }) =>
    props.active ? '#a56073' : 'transparent'};
  margin: 0 5px;
`
