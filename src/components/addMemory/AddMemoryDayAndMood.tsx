import ManFunnyIcon from '@/assets/svg/ManFunny'
import ManHappyIcon from '@/assets/svg/ManHappy'
import ManNahIcon from '@/assets/svg/ManNah'
import ManSadIcon from '@/assets/svg/ManSad'
import WomanFunnyIcon from '@/assets/svg/WomanFunny'
import WomanHappyIcon from '@/assets/svg/WomanHappy'
import WomanNahIcon from '@/assets/svg/WomanNah'
import WomanSadIcon from '@/assets/svg/WomanSad'
import { DAY } from '@/common/consts/DateTime.consts'
import { themes } from '@/common/themes/themes'
import profileStore from '@/stores/ProfileStore'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface Props {
  date_time: Date
}

type MoodEle = {
  label: string
  icon: React.JSX.Element
}

const AddMemoryDayAndMood: React.FC<Props> = props => {
  const { date_time } = props
  const [mood, setMood] = useState<MoodEle[]>()
  const [selectMood, setSelectMood] = useState<number>(0)

  const MoodElement = {
    Male: [
      {
        label: 'Happy',
        icon: <ManHappyIcon />
      },
      {
        label: 'Sad',
        icon: <ManSadIcon />
      },
      {
        label: 'Nah',
        icon: <ManNahIcon />
      },
      {
        label: 'Funny',
        icon: <ManFunnyIcon />
      }
    ],
    Female: [
      {
        label: 'Happy',
        icon: <WomanHappyIcon />
      },
      {
        label: 'Sad',
        icon: <WomanSadIcon />
      },
      {
        label: 'Nah',
        icon: <WomanNahIcon />
      },
      {
        label: 'Funny',
        icon: <WomanFunnyIcon />
      }
    ]
  }

  useEffect(() => {
    const gender = profileStore.gender

    setMood(MoodElement.Male)
    // if (gender === 'Male') {
    // } else if (gender === 'Female') {
    //   setMood(MoodElement.Female)
    // }
  }, [])

  const handleChangeMood = () => {
    setSelectMood((selectMood + 1) % 4)
  }

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>{DAY[date_time.getDay()]}</Text>
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
}

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
    justifyContent: 'center',
    alignItems: 'center'
  }
})
