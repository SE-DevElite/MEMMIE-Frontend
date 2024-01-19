import CheckboxCommon from '@/common/Checkbox.common'
import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

interface Props {
  title: string
  handleActive: () => void
  active: boolean
}

const PostSettingList: React.FC<Props> = props => {
  const { title, active, handleActive } = props

  return (
    <TouchableWithoutFeedback onPress={handleActive}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
        <CheckboxCommon active={active} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PostSettingList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10
  },
  textStyle: {
    fontSize: 16,
    color: themes.light.secondary.hex,
    fontFamily: themes.fonts.light
  }
})
