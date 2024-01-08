import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardTypeOptions
} from 'react-native'
import XcloseIcon from '@/assets/svg/Xclose'
import { themes } from '@/common/themes/themes'

interface InputUnderlineCommonProps {
  placeholder: string
  handleChangeText: (text: string) => void
  value: string

  secureTextEntry?: boolean
  keyboardType?: string
  placeholderTextColor?: string
  width?: number
  height?: number
  borderBottomWidth?: number
  borderBottomColor?: string
  deleteButton?: boolean
  autoFocus?: boolean

  keyBoardType: KeyboardTypeOptions
}

const InputUnderlineCommon: React.FC<InputUnderlineCommonProps> = props => {
  const {
    placeholder,
    handleChangeText,
    value,
    placeholderTextColor,
    autoFocus,
    width,
    height,
    borderBottomWidth,
    borderBottomColor,
    secureTextEntry,
    deleteButton,
    keyBoardType
  } = props

  return (
    <View>
      <TextInput
        style={[
          styles.inputUnderline,
          {
            width: width || '100%',
            height: height || 40,
            borderBottomWidth: borderBottomWidth || 1.5,
            borderBottomColor: borderBottomColor || themes.light.secondary.hex,
            color: themes.light.secondary.hex
          }
        ]}
        onChangeText={handleChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor || themes.light.secondary.hex
        }
        secureTextEntry={secureTextEntry}
        keyboardType={keyBoardType}
        accessible={false}
        autoFocus={autoFocus}
        keyboardAppearance="light"
      />
      {deleteButton && (
        <TouchableOpacity
          style={styles.boxDeleteButton}
          onPress={() => handleChangeText('')}>
          <XcloseIcon />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  boxDeleteButton: {
    position: 'absolute',
    right: 0,
    top: 12,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: themes.light.primary.hex,
    borderRadius: 20
  },
  inputUnderline: {}
})

export default InputUnderlineCommon
