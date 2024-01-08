import React from 'react'
import { StyleSheet, View } from 'react-native'
import { themes } from './themes/themes'

interface Props {
  active: boolean
}

const CheckboxCommon: React.FC<Props> = props => {
  const { active } = props

  return (
    <View style={styles.checkBox}>
      <View style={active ? styles.checkBoxActive : {}} />
    </View>
  )
}

export default CheckboxCommon

const styles = StyleSheet.create({
  checkBox: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: themes.light.primary.hex
  },
  checkBoxActive: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: themes.light.primary.hex
  }
})
