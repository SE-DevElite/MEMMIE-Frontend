import styled from 'styled-components/native'
import BottomSheet from '@gorhom/bottom-sheet'
import { themes } from '@/common/themes/themes'
import MonthYearPicker from './MonthYearPicker'
import React, { useMemo, useRef, useState } from 'react'

import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import PolygonDown from '@/assets/svg/PolygonDown'
import PolygonUp from '@/assets/svg/PolygonUp'

interface DatePickerProps {
  children: React.ReactNode
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const { children } = props
  const [selectedMonth, setSelectedMonth] = useState<string>('October')
  const [selectedYear, setSelectedYear] = useState<string>('2023')

  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['70%'], [])

  const handleClosePress = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand()

  const handleChangeMonth = (itemValue: string, itemIndex: number) => {
    console.log(`change month: ${itemValue}`)
    setSelectedMonth(itemValue)
  }

  const handleChangeYear = (itemValue: string, itemIndex: number) => {
    console.log(`change year: ${itemValue}`)
    setSelectedYear(itemValue)
  }

  return (
    <TouchableWithoutFeedback onPress={handleClosePress}>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <TextStyle style={styles.textStyle} onPress={handleOpenPress}>
            {selectedMonth}, {selectedYear}
          </TextStyle>

          <View style={styles.iconGroup}>
            <PolygonUp />
            <PolygonDown />
          </View>
        </View>

        {children}

        <BottomSheet
          ref={bottomSheetRef}
          style={styles.bottomSheetStyle}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backgroundStyle={{ backgroundColor: themes.light.tertiary.hex }}
          handleIndicatorStyle={{ backgroundColor: themes.light.primary.hex }}>
          <MonthYearPicker
            onChangeMonth={handleChangeMonth}
            onChangeYear={handleChangeYear}
            monthValue={selectedMonth}
            yearValue={selectedYear}
          />
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DatePicker

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: 'red'
  },
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
  },
  bottomSheetStyle: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    // elevation: 2
  }
})

const TextStyle = styled.Text`
  color: ${themes.light.secondary.hex};
`
