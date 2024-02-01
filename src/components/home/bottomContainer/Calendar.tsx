import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'
import { View, StyleSheet } from 'react-native'
import { DAY_SHORT } from '@/common/consts/DateTime.consts'

import CalendarTable from './CalendarTable'
import { ICalendar } from '@/interface/daily_response'

interface Props {
  calendar: ICalendar[][]
  onReadMemoryPress: () => void
}

const Calendar: React.FC<Props> = props => {
  const { calendar, onReadMemoryPress } = props

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.flexBox}>
          {DAY_SHORT.map((day, index) => (
            <View key={index} style={styles.textBox}>
              <TextStyle>{day}</TextStyle>
            </View>
          ))}
        </View>

        <CalendarContainer style={styles.calendarContainer}>
          <CalendarTable
            calendar={calendar}
            onReadMemoryPress={onReadMemoryPress}
          />
        </CalendarContainer>
      </View>
    </View>
  )
}

export default Calendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 72
    // backgroundColor: 'red'
  },
  calendarContainer: {
    borderRadius: 32,
    backgroundColor: 'white',
    padding: 12
  },
  flexBox: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    flexDirection: 'row'
    // backgroundColor: 'red'
  },
  textBox: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    // backgroundColor: 'red',
    textAlign: 'center'
  }
})

const CalendarContainer = styled.View`
  background-color: white;
`

const TextStyle = styled.Text`
  font-size: 12px;
  color: ${themes.light.secondary.hex};
  font-family: ${themes.fonts.regular};
`
