import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

import { View, StyleSheet } from 'react-native'
import PolygonDown from '@/assets/svg/PolygonDown'
import PolygonUp from '@/assets/svg/PolygonUp'

interface DatePickerProps {
  selectedMonth: string
  selectedYear: string
  onOpenPress: () => void
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const { selectedMonth, selectedYear, onOpenPress } = props

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TextStyle style={styles.textStyle} onPress={onOpenPress}>
          {selectedMonth}, {selectedYear}
        </TextStyle>

        <View style={styles.iconGroup}>
          <PolygonUp />
          <PolygonDown />
        </View>
      </View>
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({
  container: {},
  textBox: {
    paddingLeft: 32,
    paddingVertical: 16,
    paddingTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  textStyle: {
    // paddingVertical: 8,
    fontFamily: themes.fonts.medium,
    fontSize: 16
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 8
  }
})

const TextStyle = styled.Text`
  color: ${themes.light.secondary.hex};
`
