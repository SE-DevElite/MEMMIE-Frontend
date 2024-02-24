import React from 'react'
import { themes } from '@/common/themes/themes'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { ICalendar } from '@/interface/daily_response'
import SkeletonTable from './SkeletonTable'
import readMemoryStore from '@/stores/ReadMemoryStore'
import { observer } from 'mobx-react'

interface Props {
  calendar: ICalendar[][]
  onReadMemoryPress: () => void
}

const CalendarTable: React.FC<Props> = observer(props => {
  const { calendar, onReadMemoryPress } = props

  const handleSelect = async (memory: any) => {
    onReadMemoryPress()

    readMemoryStore.updateMemoryDetails({
      ...memory.memories[0]
    })
    readMemoryStore.updateMemoryList(0, {
      ...memory.memories[0].memory_lists
    })
    // readMemoryStore.lat = memory[0].lat
    // readMemoryStore.long = memory[0].long
    // readMemoryStore.caption = memory.memories[0].caption
    // readMemoryStore.short_caption = memory.memories[0].short_caption

    const [datePart, timePart] = memory.memories[0].selected_datetime.split(' ')
    const [year, month, day] = datePart.split('-').map(Number)
    const [hour, minute] = timePart.split(':').map(Number)
    readMemoryStore.datetime[0].year_date = year
    readMemoryStore.datetime[0].month_date = month
    readMemoryStore.datetime[0].day_date = day
    readMemoryStore.datetime[0].hour_date = hour
    readMemoryStore.datetime[0].minute_date = minute

    console.log('\n\n', memory.memories[0], '\n\n', readMemoryStore)
  }

  return (
    <View style={styles.container}>
      {calendar.length == 1 ? (
        <SkeletonTable />
      ) : (
        calendar.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.flexRow}>
            {row.map((value, columnIndex) =>
              value.day === '' ? (
                <View
                  style={{ ...styles.dayBox, backgroundColor: 'white' }}
                  key={columnIndex}
                />
              ) : (
                <View style={styles.dayBox} key={columnIndex}>
                  <ImageBackground
                    source={
                      value.memories.length > 0
                        ? {
                            uri: value.memories[0].memory_lists[0].memory_url
                          }
                        : require('@/assets/mocks/empty.png')
                    }>
                    <TouchableOpacity
                      onPress={() => {
                        // onReadMemoryPress()
                        value.memories.length > 0
                          ? // ? onReadMemoryPress()
                            handleSelect(value)
                          : () => {}
                        // console.log(value.memories[0])
                      }}>
                      <View
                        style={{
                          ...styles.innerFlex,
                          backgroundColor:
                            value.memories.length > 0
                              ? 'rgba(255,255,255,0.6)'
                              : 'transparent'
                        }}>
                        <Text style={styles.textStyle}>{value.date}</Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              )
            )}
          </View>
        ))
      )}
    </View>
  )
})

export default CalendarTable

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red'
  },
  flexRow: {
    flexDirection: 'row'
    // gap: 5
  },
  dayBox: {
    flex: 1,
    width: 45,
    height: 45,
    backgroundColor: themes.light.tertiary.hex,
    // backgroundColor: 'red',
    alignItems: 'center',
    margin: 3,
    borderRadius: 15,
    overflow: 'hidden'
  },
  innerFlex: {
    flex: 1,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  textStyle: {
    fontFamily: themes.fonts.bold,
    color: themes.light.primary.hex,
    fontSize: 15
  }
})
