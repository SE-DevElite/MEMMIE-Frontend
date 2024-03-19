import { MoodElement } from '@/common/consts/MoodElement.consts'
import { themes } from '@/common/themes/themes'
import editMemoryStore from '@/stores/EditMemoryStore'
import readMemoryStore from '@/stores/ReadMemoryStore'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface Props {
  handleEditPinPlace: () => void
}

const EditMemoryDayAndMood: React.FC<Props> = observer(props => {
  const { handleEditPinPlace } = props
  const readMood: { [key: string]: number } = {
    happy: 0,
    sad: 1,
    nah: 2,
    funny: 3
  }
  const [selectMood, setSelectMood] = useState<number>(
    readMood[editMemoryStore.mood]
  )

  const handleChangeMood = () => {
    const current_idx = (selectMood + 1) % 4
    setSelectMood(current_idx)
    console.log(current_idx)

    editMemoryStore.mood = MoodElement.Male[current_idx].label.toLowerCase()
  }

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>{readMemoryStore.day.toUpperCase()}</Text>
        <TouchableOpacity onPress={handleEditPinPlace}>
          <Text numberOfLines={1} style={styles.descriptionText}>
            {readMemoryStore.location_name}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleChangeMood}>
        <View style={styles.moodContainer}>
          <View style={styles.moodIcon}>
            {editMemoryStore.mood
              ? MoodElement.Male[readMood[editMemoryStore.mood]].icon
              : editMemoryStore.mood}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
})

export default EditMemoryDayAndMood

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
