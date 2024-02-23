import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MONTH_SHORT } from '@/common/consts/DateTime.consts'
import { WeatherElement } from '@/common/consts/WeatherElement.consts'
import addMemoryStore from '@/stores/AddMemoryStore'
import { observer } from 'mobx-react'

interface Props {
  handleEditDate: () => void
  handleEditTime: () => void
}

const AddMemorySelectTime: React.FC<Props> = observer(props => {
  const { handleEditDate, handleEditTime } = props
  const [weather, setWeather] = useState<number>(addMemoryStore.weather)

  const collectDate = [
    addMemoryStore.date_time.getDate() == 0
      ? 1
      : addMemoryStore.date_time.getDate(),
    MONTH_SHORT[addMemoryStore.date_time.getMonth()],
    addMemoryStore.date_time.getFullYear()
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

          <TouchableOpacity
            onPress={() => {
              handleEditTime()
              // console.log(addMemoryStore.date_time)
            }}>
            <View style={{ padding: 5 }}>
              <Text style={styles.timeText}>
                {addMemoryStore.hours.toString().padStart(2, '0')} :{' '}
                {addMemoryStore.minutes.toString().padStart(2, '0')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
})

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
