import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'
import { View, StyleSheet, Image } from 'react-native'

interface ButtonLongCommonProps {
  title: string
  onPress: () => void

  width?: number
  height?: number
  background_color?: string
  color?: string
  font_size?: number
  fonts?: string
  prefix_icon?: NodeRequire
}

const ButtonLongCommon: React.FC<ButtonLongCommonProps> = props => {
  const {
    title,
    onPress,
    width,
    height,
    background_color,
    color,
    font_size,
    fonts,
    prefix_icon
  } = props

  return (
    <ButtonCustom
      onPress={onPress}
      width={width}
      height={height}
      background_color={background_color}
      justifyCenter={prefix_icon ? false : true}>
      <ButtonText color={color} font_size={font_size} fontWeight={fonts}>
        {title}
      </ButtonText>
    </ButtonCustom>
  )
}

export default ButtonLongCommon

const styles = StyleSheet.create({
  imagePrefix: {
    width: 15,
    height: 15,
    marginRight: 15
  }
})

const ButtonCustom = styled.TouchableOpacity`
  width: ${(props: { width: number }) => props.width || 300}px;
  height: ${(props: { height: number }) => props.height || 55}px;
  background-color: ${(props: { background_color: string }) =>
    props.background_color || themes.light.tertiary.hex};

  justify-content: ${(props: { justifyCenter: boolean }) =>
    props.justifyCenter ? 'center' : ''};
  align-items: center;
  z-index: 2;

  flex-direction: row;

  border-radius: 50%;
`

const ButtonText = styled.Text`
  /* padding-left: 20px; */

  color: ${(props: { color: string }) =>
    props.color || themes.light.primary.hex};

  font-family: ${(props: { fonts: string }) =>
    props.fonts || themes.fonts.samiBold};

  font-size: ${(props: { font_size: number }) => props.font_size || 20}px;
`
