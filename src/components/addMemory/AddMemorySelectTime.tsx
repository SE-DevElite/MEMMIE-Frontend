import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MONTH_SHORT } from '@/common/consts/DateTime.consts'
import WeatherClearskyIcon from '@/assets/svg/WeatherClearsky'
import WeatherCloudIcon from '@/assets/svg/WeatherCloud'
import WeatherDownpourIcon from '@/assets/svg/WeatherDownpour'
import WeatherSnowflakeIcon from '@/assets/svg/WeatherSnowflake'
import WeatherSunnyIcon from '@/assets/svg/WeatherSunny'

interface Props {
  date_time: Date
  time_minute: {
    hours: number
    minutes: number
  }
  handleEditDate: () => void
  handleEditTime: () => void
}

const AddMemorySelectTime: React.FC<Props> = props => {
  const { date_time, handleEditDate, handleEditTime, time_minute } = props

  const [weather, setWeather] = useState<number>(0)

  const collectDate = [
    date_time.getDate(),
    MONTH_SHORT[date_time.getMonth()],
    date_time.getFullYear()
  ]

  const handleSetWeather = () => {
    setWeather((weather + 1) % 5)
  }

  const WeatherElement = [
    {
      label: 'Clearsky',
      icon: <WeatherClearskyIcon width={30} height={30} />
    },
    {
      label: 'Cloud',
      icon: <WeatherCloudIcon width={30} height={30} />
    },
    {
      label: 'Downpour',
      icon: <WeatherDownpourIcon width={30} height={30} />
    },
    {
      label: 'ShowFlake',
      icon: <WeatherSnowflakeIcon width={30} height={30} />
    },
    {
      label: 'Sunny',
      icon: <WeatherSunnyIcon width={30} height={30} />
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.dateSection}>
        {collectDate.map((item, index) => (
          <View style={styles.dateItemContainer} key={index}>
            <TouchableOpacity onPress={handleEditDate}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateTextStyle}>{item}</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.timeTextStyle}>
                {index === 0 ? 'Date' : index === 1 ? 'Month' : 'Year'}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View>
        <View style={styles.timeInnerContainer}>
          <TouchableOpacity onPress={handleSetWeather}>
            <View style={styles.weatherIcon}>
              {WeatherElement[weather].icon}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleEditTime}>
            <View style={{ padding: 5 }}>
              <Text style={styles.timeText}>
                {time_minute.hours.toString().padStart(2, '0')} :{' '}
                {time_minute.minutes.toString().padStart(2, '0')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AddMemorySelectTime

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
    backgroundColor: '#d5d5d5d5',
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
