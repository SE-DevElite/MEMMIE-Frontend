import { MoodElement } from '@/common/consts/MoodElement.consts'
import { WeatherElement } from '@/common/consts/WeatherElement.consts'
import { themes } from '@/common/themes/themes'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MemoryCardTopRow: React.FC = observer(() => {
  return (
    <View style={memoryStyles.topRow}>
      <View style={memoryStyles.dateColumn}>
        <Text style={memoryStyles.dateText}>
          {profileStore.curr_album_create_at
            .toLocaleDateString('en-US', {
              weekday: 'short',
              day: 'numeric'
            })
            .replace(' ', ', ')}
        </Text>
        <Text style={memoryStyles.mediumDateText}>
          {profileStore.curr_album_create_at
            .toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })
            .replace(' ', ', ')}
        </Text>
        <Text
          style={memoryStyles.locationText}
          numberOfLines={1}
          ellipsizeMode="tail">
          {profileStore.curr_album_create_at
            .toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })
            .replace(' ', ', ')}{' '}
          {profileStore.curr_album_location}
        </Text>
      </View>

      <View style={memoryStyles.iconsColumn}>
        <View style={memoryStyles.icon}>
          {MoodElement.Male.map((mood, index) => {
            if (mood.label.toLowerCase() === profileStore.curr_first_mood) {
              return mood.icon
            }
          })}
        </View>
        <View style={memoryStyles.icon}>
          {WeatherElement.map((weather, index) => {
            if (
              weather.label.toLowerCase() === profileStore.curr_first_weather
            ) {
              return weather.icon
            }
          })}
        </View>
      </View>
    </View>
  )
})

export default MemoryCardTopRow

const memoryStyles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  dateColumn: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dateText: {
    fontFamily: themes.fonts.light,
    fontSize: 13,
    color: 'white'
  },
  mediumDateText: {
    fontFamily: themes.fonts.medium,
    fontSize: 13,
    color: 'white'
  },
  locationText: {
    fontFamily: themes.fonts.light,
    fontSize: 12,
    color: 'white',
    width: 130
  },
  iconsColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 5
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
})
