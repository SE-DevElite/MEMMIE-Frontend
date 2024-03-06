import React, { useState, useEffect } from 'react'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native'
import { themes } from '@/common/themes/themes'
import ButtonCommon from '@/common/Button.common'
import WeatherSunnyIcon from '@/assets/svg/WeatherSunny'
import WeatherCloudIcon from '@/assets/svg/WeatherCloud'
import WeatherDownpourIcon from '@/assets/svg/WeatherDownpour'
import WeatherClearskyIcon from '@/assets/svg/WeatherClearsky'
import WeatherSnowflakeIcon from '@/assets/svg/WeatherSnowflake'
import WomanHappyIcon from '@/assets/svg/WomanHappy'
import WomanFunnyIcon from '@/assets/svg/WomanFunny'
import WomanNahIcon from '@/assets/svg/WomanNah'
import WomanSadIcon from '@/assets/svg/WomanSad'

interface Props {
  handleClose: () => void
  handleSelectDateStart: () => void
  handleSelectDateEnd: () => void
  selectedDateStart: Date
  selectedDateEnd: Date
  handleSubmit: (mood: number | null, weather: number | null) => void
  waitApplyingFilter: boolean
}

const FilterMap: React.FC<Props> = props => {
  const {
    handleClose,
    handleSelectDateStart,
    handleSelectDateEnd,
    selectedDateStart,
    selectedDateEnd,
    handleSubmit,
    waitApplyingFilter
  } = props
  const [currentDateStart, setCurrentDateStart] = useState('')
  const [currentDateEnd, setCurrentDateEnd] = useState('')
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [selectedWeather, setSelectedWeather] = useState<number | null>(null)

  useEffect(() => {
    updateCurrentDateStart()
    updateCurrentDateEnd()
  }, [selectedDateStart, selectedDateEnd])

  const updateCurrentDateStart = () => {
    const today = selectedDateStart
    const formattedDate = `${today.getDate()} ${today.toLocaleString(
      'default',
      { month: 'short' }
    )} ${today.getFullYear()}`

    setCurrentDateStart(formattedDate)
  }

  const updateCurrentDateEnd = () => {
    const today = selectedDateEnd
    const formattedDate = `${today.getDate()} ${today.toLocaleString(
      'default',
      { month: 'short' }
    )} ${today.getFullYear()}`

    setCurrentDateEnd(formattedDate)
  }

  const handleMoodSelection = (index: number) => {
    setSelectedMood(index === selectedMood ? null : index)
  }

  const handleWeatherSelection = (index: number) => {
    setSelectedWeather(index === selectedWeather ? null : index)
  }

  const weatherDefaultIcons = [
    WeatherSunnyIcon,
    WeatherCloudIcon,
    WeatherClearskyIcon,
    WeatherDownpourIcon,
    WeatherSnowflakeIcon
  ]

  const moodIcons = [WomanHappyIcon, WomanFunnyIcon, WomanNahIcon, WomanSadIcon]

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Clear</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Add Filter</Text>

          {waitApplyingFilter ? (
            <ActivityIndicator
              color={themes.light.primary.hex}
              size="small"
              style={{ width: 70 }}
            />
          ) : (
            <TouchableOpacity
              onPress={() => handleSubmit(selectedMood, selectedWeather)}>
              <Text style={styles.buttonStyle}>Apply</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ ...styles.layout, paddingHorizontal: 30 }}>
        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.textTitle}>Date</Text>
          <View style={styles.dropDownGroup}>
            <ButtonCommon
              title={currentDateStart}
              onPress={() => handleSelectDateStart()}
              width={140}
              height={41}
              font_size={14}
            />

            <Text style={[styles.textTitle, { paddingTop: 7 }]}>to</Text>
            <ButtonCommon
              title={currentDateEnd}
              onPress={() => handleSelectDateEnd()}
              width={140}
              height={41}
              font_size={14}
            />
          </View>
        </View>

        <View style={{ paddingBottom: 20 }}>
          <Text style={styles.textTitle}>Mood</Text>
          <View style={styles.moodGroup}>
            {moodIcons.map((MoodIcons, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleMoodSelection(index)}>
                <View
                  style={[
                    styles.moodContainer,
                    selectedMood === index && styles.selectedMood
                  ]}>
                  <View style={styles.moodIcon}>
                    <MoodIcons width={40} height={40} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.textTitle}>Weather</Text>
          <View style={styles.weatherGroup}>
            {weatherDefaultIcons.map((WeatherDefaultIcon, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handleWeatherSelection(index)}>
                <WeatherDefaultIcon />
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

export default FilterMap

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  headerGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonStyle: {
    // backgroundColor: 'red',
    width: 70,
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  headingTextStyles: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 20
  },
  textTitle: {
    fontSize: 14,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex,
    paddingBottom: 10
  },
  dropDownGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moodGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  moodContainer: {
    width: 43,
    height: 43,
    borderRadius: 25,
    backgroundColor: themes.light.tertiary.hex,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  moodIcon: {
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden'
  },
  selectedMood: {
    backgroundColor: themes.light.primary.hex
  },
  circleAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: themes.light.tertiary.hex,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  weatherGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25
  }
})
