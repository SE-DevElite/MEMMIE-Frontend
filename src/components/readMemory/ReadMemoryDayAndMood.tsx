import { MoodElement } from '@/common/consts/MoodElement.consts'
import { themes } from '@/common/themes/themes'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import readMemoryStore from '@/stores/ReadMemoryStore'

interface Props {
  handleReadPinPlace: () => void
}

const ReadMemoryDayAndMood: React.FC<Props> = observer(props => {
  const { handleReadPinPlace } = props

  const readMood = {
    happy: 0,
    sad: 1,
    nah: 2,
    funny: 3
  }

  const handlePressLocation = () => {
    handleReadPinPlace()
  }

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>
          {readMemoryStore.day.toLocaleUpperCase()}
        </Text>
        <TouchableOpacity
          onPress={() => {
            handlePressLocation()
            // console.log(readMemoryStore.lat, readMemoryStore.long)
          }}>
          <Text numberOfLines={1} style={styles.descriptionText}>
            {readMemoryStore.location_name}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.moodContainer}>
        <View style={styles.moodIcon}>
          {readMemoryStore.mood
            ? MoodElement.Male[
                readMood[readMemoryStore.mood as keyof typeof readMood]
              ].icon
            : readMemoryStore.mood}
        </View>
      </View>
    </View>
  )
})

export default ReadMemoryDayAndMood

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dayContainer: {
    justifyContent: 'center'
  },
  dayText: {
    fontFamily: themes.fonts.medium,
    fontSize: 20,
    color: themes.light.primary.hex,
    marginBottom: 5
  },
  descriptionText: {
    fontFamily: themes.fonts.medium,
    fontSize: 13,
    color: themes.light.primary.hex,
    marginBottom: 5,
    maxWidth: 250
  },
  moodContainer: {
    // Add any additional styles for the container if needed
  },
  moodIcon: {
    width: 45,
    height: 45,
    backgroundColor: themes.light.tertiary.hex,
    borderRadius: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden'
  }
})
