import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'
import { View, StyleSheet } from 'react-native'
import { DAY_SHORT } from '@/common/consts/DateTime.consts'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const Calendar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.flexBox}>
          {DAY_SHORT.map((day, index) => (
            <View key={index}>
              <TextStyle>{day}</TextStyle>
            </View>
          ))}
        </View>

        <CalendarContainer style={styles.calendarContainer}></CalendarContainer>
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
    paddingBottom: 32
  },
  calendarContainer: {
    height: hp('37%'),
    borderRadius: 32,
    backgroundColor: 'white'
    // padding: 16,
  },
  flexBox: {
    paddingHorizontal: 24,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // backgroundColor: 'red'
  },
  textStyle: {}
})

const CalendarContainer = styled.View`
  background-color: white;
`

const TextStyle = styled.Text`
  font-size: 12px;
  color: ${themes.light.secondary.hex};
  font-family: ${themes.fonts.regular};
`
