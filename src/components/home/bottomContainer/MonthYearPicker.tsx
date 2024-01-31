import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { MONTH } from '@/common/consts/DateTime.consts'

interface MonthYearPickerProps {
  onChangeMonth: (itemValue: string) => void
  onChangeYear: (itemValue: string) => void

  yearValue: string
  monthValue: string
}

const MonthYearPicker: React.FC<MonthYearPickerProps> = props => {
  const { onChangeMonth, onChangeYear, yearValue, monthValue } = props

  const currentYear = new Date().getFullYear()
  const startYear = 1990
  const endYear = currentYear

  const yearArray = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => endYear - index
  )

  return (
    <View style={styles.container}>
      <View style={styles.monthPicker}>
        <Picker selectedValue={monthValue} onValueChange={onChangeMonth}>
          {MONTH.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <View style={styles.yearPicker}>
        <Picker selectedValue={yearValue} onValueChange={onChangeYear}>
          {yearArray.map((item, index) => (
            <Picker.Item key={index} label={item.toString()} value={item} />
          ))}
        </Picker>
      </View>
    </View>
  )
}

export default MonthYearPicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 32
  },
  monthPicker: {
    flex: 1
  },
  yearPicker: {
    flex: 1
  }
})
