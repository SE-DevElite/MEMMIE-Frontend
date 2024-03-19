import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { themes } from '@/common/themes/themes'

interface Props {
  background_color?: string
  active?: boolean
  handleChange?: () => void
}

const SwitchCommon: React.FC<Props> = props => {
  const { background_color, active, handleChange } = props

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.boxSwitch,
          {
            backgroundColor: themes.light.secondary.hex || background_color,
            justifyContent: active ? 'flex-end' : 'flex-start'
          }
        ]}
        onPress={handleChange}>
        <View style={styles.circle} />
      </TouchableOpacity>
    </View>
  )
}

export default SwitchCommon

const styles = StyleSheet.create({
  boxSwitch: {
    width: 92,
    height: 48,
    borderRadius: 50,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'white'
  }
})
