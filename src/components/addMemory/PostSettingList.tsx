import CheckboxCommon from '@/common/Checkbox.common'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  title: string
  handleActive: () => void
  active: boolean
}

const PostSettingList: React.FC<Props> = props => {
  const { title, active, handleActive } = props

  return (
    <TouchableOpacity onPress={handleActive}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
        <CheckboxCommon active={active} />
      </View>
    </TouchableOpacity>
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
