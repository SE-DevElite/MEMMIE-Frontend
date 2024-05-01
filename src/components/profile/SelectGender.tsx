import CheckboxCommon from '@/common/Checkbox.common'
import { themes } from '@/common/themes/themes'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  handleChangeProfile: (key: string, value: string) => void
}

const SelectGender: React.FC<Props> = observer(props => {
  const { handleChangeProfile } = props

  const [active, setActive] = useState({
    male: false,
    female: false,
    other: false
  })

  useEffect(() => {
    if (profileStore.gender === 'Male') {
      setActive({
        male: true,
        female: false,
        other: false
      })
    } else if (profileStore.gender === 'Female') {
      setActive({
        male: false,
        female: true,
        other: false
      })
    } else {
      setActive({
        male: false,
        female: false,
        other: true
      })
    }
  }, [profileStore.gender])

  const data = [
    {
      label: 'Male',
      active: active.male
    },
    {
      label: 'Female',
      active: active.female
    },
    {
      label: 'Other',
      active: active.other
    }
  ]

  const handlePress = (label: string) => {
    setActive({
      male: label === 'Male',
      female: label === 'Female',
      other: label === 'Other'
    })

    if (label === 'Male') {
      profileStore.gender = 'Male'
    } else if (label === 'Female') {
      profileStore.gender = 'Female'
    } else {
      profileStore.gender = 'Other'
    }

    handleChangeProfile('gender', label)
  }

  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text style={styles.titleText}>Gender</Text>
        <Text style={styles.label}>
          This won't be part of your public profile
        </Text>
      </View>
      <View>
        {data.map((item, index) => (
          <TouchableOpacity onPress={() => handlePress(item.label)} key={index}>
            <View style={styles.row}>
              <Text style={styles.label}>{item.label}</Text>
              <CheckboxCommon active={item.active} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
})

export default SelectGender

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60,
    gap: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
  titleText: {
    fontSize: 22,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex,
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    textAlign: 'center'
  }
})
