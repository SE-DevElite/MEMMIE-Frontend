import React from 'react'
import { themes } from './themes/themes'
import ArrowBack from '@/assets/svg/Arrowback'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

interface ButtonBackProps {
  text: string
  handlePress: () => void
}

const ButtonBackCommon: React.FC<ButtonBackProps> = (props) => {
  const { text, handlePress } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.circleButton}>
          <ArrowBack />
        </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </View>
  )
}

export default ButtonBackCommon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 120,
    backgroundColor: themes.light.tertiary.hex,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.secondary.hex
  }
})
