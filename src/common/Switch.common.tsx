import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

interface SwitchCommonProps {}

const SwitchCommon: React.FC<SwitchCommonProps> = props => {
  return (
    <View>
      <BoxSwitch onPress={() => console.log('Switchhhh')}>
        <Circle />
      </BoxSwitch>
    </View>
  )
}

export default SwitchCommon

const BoxSwitch = styled.TouchableOpacity`
  width: 92px;
  height: 48px;
  border-radius: 50%;

  background-color: ${themes.light.tertiary.hex};
  padding: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Circle = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: white;
`
