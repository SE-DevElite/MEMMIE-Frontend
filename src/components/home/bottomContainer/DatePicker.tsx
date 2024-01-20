import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import PolygonDown from '@/assets/svg/PolygonDown'
import PolygonUp from '@/assets/svg/PolygonUp'

interface DatePickerProps {
  selectedMonth: string
  selectedYear: string
  onOpenPress: () => void
  handlePolygonPress: (type_case: number) => void
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const { selectedMonth, selectedYear, onOpenPress, handlePolygonPress } = props

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TouchableOpacity onPress={onOpenPress}>
          <Text style={styles.textStyle}>
            {selectedMonth}, {selectedYear}
          </Text>
        </TouchableOpacity>

        <View style={styles.iconGroup}>
          <TouchableOpacity onPress={() => handlePolygonPress(1)}>
            <PolygonUp />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handlePolygonPress(-1)}>
            <PolygonDown />
          </TouchableOpacity>
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
    fontSize: 16,
    color: themes.light.secondary.hex,
    width: 140
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 8
  }
})
