import { DAY } from '@/common/consts/DateTime.consts'
import { MoodElement } from '@/common/consts/MoodElement.consts'
import { themes } from '@/common/themes/themes'
import addMemoryStore from '@/stores/AddMemoryStore'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

type MoodEle = {
  label: string
  icon: React.JSX.Element
}

const AddMemoryDayAndMood: React.FC = observer(() => {
  const [mood, setMood] = useState<MoodEle[]>()
  const [selectMood, setSelectMood] = useState<number>(0)

  useEffect(() => {
    // const gender = profileStore.gender

    setMood(MoodElement.Male)
  }, [])

  const handleChangeMood = () => {
    const current_idx = (selectMood + 1) % 4
    setSelectMood(current_idx)

    addMemoryStore.mood = current_idx
  }

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>
          {DAY[addMemoryStore.date_time.getDay()]}
        </Text>
        <Text numberOfLines={1} style={styles.descriptionText}>
          King's Mongkut University technology of thonburi
        </Text>
      </View>

      {mood && (
        <TouchableOpacity onPress={handleChangeMood}>
          <View style={styles.moodContainer}>
            <View style={styles.moodIcon}>{mood[selectMood].icon}</View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
})

export default AddMemoryDayAndMood

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
