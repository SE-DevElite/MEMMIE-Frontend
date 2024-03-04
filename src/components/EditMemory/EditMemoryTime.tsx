import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import addMemoryStore from '@/stores/AddMemoryStore'

interface Props {
  handleClose: () => void
  handleSetTime: (time: Date) => void
}

const EditMemoryTime: React.FC<Props> = props => {
  const { handleClose, handleSetTime } = props
  const [current_time, setCurrentTime] = useState<Date>(new Date())
  const handleEditTime = (date: Date) => {
    let tmr = new Date(date)
    tmr.setHours(tmr.getHours() + 7)
    addMemoryStore.handleEditDateTime(tmr, 'time')
    handleSetTime(date)
  }
  // current_time.setHours(current_time.getHours() - 7)
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity
            onPress={() => {
              handleClose()
              console.log(current_time)
            }}>
            <Text style={styles.buttonStyle}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Edit time</Text>

          <TouchableOpacity
            onPress={() => {
              handleEditTime(current_time)
              console.log(addMemoryStore.date_time)
            }}>
            <Text
              style={{
                ...styles.buttonStyle,
                fontFamily: themes.fonts.medium,
                fontSize: 14
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.layout}>
        <RNDateTimePicker
          value={current_time}
          mode="time"
          display="spinner"
          onChange={(event, value) => {
            setCurrentTime(value || current_time)
          }}
        />
      </View>
    </View>
  )
}

export default EditMemoryTime

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
  }
})
