import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

import DatePicker from './DatePicker'
import { StyleSheet } from 'react-native'
import Calendar from './tableCalendar/Calendar'

const CalendarTable: React.FC = () => {
  return (
    <DatePicker>
      <Calendar />
    </DatePicker>
  )
}

export default CalendarTable

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: 'red'
  }
})

const TextStyle = styled.Text`
  color: ${themes.light.secondary.hex};
`
