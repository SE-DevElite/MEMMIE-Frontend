import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { View, Text, StyleSheet } from 'react-native'
import { MONTH_SHORT } from '@/common/consts/DateTime.consts'
import { WeatherElement } from '@/common/consts/WeatherElement.consts'
import addMemoryStore from '@/stores/AddMemoryStore'
import { observer } from 'mobx-react'
import readMemoryStore from '@/stores/ReadMemoryStore'
//weather
interface Props {
  //   handleEditDate: () => void
  //   handleEditTime: () => void
}

const ReadMemoryTime: React.FC<Props> = observer(props => {
  //   const { handleEditDate, handleEditTime } = props
  const [weather, setWeather] = useState<number>(addMemoryStore.weather)

  const collectDate = [
    parseInt(readMemoryStore.datetime[0].day_date) == 0
      ? 1
      : readMemoryStore.datetime[0].day_date,
    MONTH_SHORT[parseInt(readMemoryStore.datetime[0].month_date) - 1],
    readMemoryStore.datetime[0].year_date
  ]

  const handleSetWeather = () => {
    const current_idx = (weather + 1) % 5
    setWeather(current_idx)

    addMemoryStore.weather = current_idx
  }

  return (
    <View style={styles.container}>
      <View style={styles.dateSection}>
        {collectDate.map((item, index) => (
          <View style={styles.dateItemContainer} key={index}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateTextStyle}>{item}</Text>
            </View>
            <View>
              <Text style={styles.timeTextStyle}>
                {index === 0 ? 'Date' : index === 1 ? 'Month' : 'Year'}
              </Text>
            </View>
          </View>
        ))}
      </View>
      {/* <TouchableOpacity
        style={styles.dateContainer}
        onPress={() => {
          console.log(readMemoryStore.datetime[0].day_date)
        }}
      /> */}
      <View>
        <View style={styles.timeInnerContainer}>
          <View style={styles.weatherIcon}>{WeatherElement[weather].icon}</View>

          <View style={{ padding: 5 }}>
            <Text style={styles.timeText}>
              {parseInt(readMemoryStore.datetime[0].hour_date)
                .toString()
                .padStart(2, '0')}{' '}
              :{' '}
              {parseInt(readMemoryStore.datetime[0].minute_date)
                .toString()
                .padStart(2, '0')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
})

export default ReadMemoryTime

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateSection: {
    flexDirection: 'row',
    gap: 10
  },
  dateItemContainer: {
    flexDirection: 'column',
    gap: 10
  },
  dateContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 40,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: themes.light.tertiary.hex
  },
  dateTextStyle: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 17,
    color: themes.light.secondary.hex
  },
  timeTextStyle: {
    fontFamily: themes.fonts.regular,
    fontSize: 12,
    color: themes.light.primary.hex
  },
  timeInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  weatherIcon: {
    paddingTop: 4,
    paddingLeft: 4,
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeText: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 20,
    color: themes.light.primary.hex
  }
})
