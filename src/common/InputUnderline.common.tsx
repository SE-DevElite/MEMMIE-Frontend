import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

interface InputUnderlineCommonProps {
  placeholder: string
  handleChangeText: (text: string) => void
  value: string

  secureTextEntry?: boolean
  keyboardType?: string
  placeholderTextColor?: string
  width?: string
  height?: string
  borderBottomWidth?: string
  borderBottomColor?: string
}

const InputUnderlineCommon: React.FC<InputUnderlineCommonProps> = props => {
  const {
    placeholder,
    handleChangeText,
    value,
    placeholderTextColor,
    keyboardType,
    width,
    height,
    borderBottomWidth,
    borderBottomColor,
    secureTextEntry
  } = props

  return (
    <InputUnderline
      onChangeText={handleChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType || 'default'}
      placeholderTextColor={placeholderTextColor || themes.light.secondary.hex}
      width={width}
      height={height}
      borderBottomWidth={borderBottomWidth}
      borderBottomColor={borderBottomColor}
      secureTextEntry={secureTextEntry}
      placeholderStyle={{ fontFamily: themes.fonts.bold }}
      keyboardShouldPersistTaps="handled"
      accessible={false}
    />
  )
}

export default InputUnderlineCommon

const InputUnderline = styled.TextInput`
  /* width: 300px;
  height: 40px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${themes.light.secondary.hex}; */
  color: ${themes.light.secondary.hex};

  width: ${(props: { width: number }) => props.width || 300}px;
  height: ${(props: { height: number }) => props.height || 40}px;

  border-bottom-width: ${(props: { borderBottomWidth: number }) =>
    props.borderBottomWidth || 1.5}px;

  border-bottom-color: ${(props: { borderBottomColor: string }) =>
    props.borderBottomColor || themes.light.secondary.hex};
`
