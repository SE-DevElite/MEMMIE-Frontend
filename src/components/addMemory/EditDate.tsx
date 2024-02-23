import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import addMemoryStore from '@/stores/AddMemoryStore'

interface Props {
  handleClose: () => void
  handleSave?: (date: Date, type_filter: string) => void
  type_filter?: string
}

const EditDate: React.FC<Props> = props => {
  const { handleClose, handleSave, type_filter } = props
  const [time_gmt, setTimeGMT] = useState<Date>(new Date())
  const [current_time, setCurrentTime] = useState<Date>(
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
  )

  const handleEditDate = () => {
    addMemoryStore.handleEditDateTime(current_time, 'date')

    if (handleSave && type_filter) {
      handleSave(current_time, type_filter)
    }

    handleClose()
  }

  const handleChangeTime = (date: Date) => {
    setTimeGMT(date)
    var utc_date = new Date(date.getTime() - date.getTimezoneOffset() * 60000)

    setCurrentTime(utc_date)
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Edit date</Text>

          <TouchableOpacity onPress={handleEditDate}>
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
          value={time_gmt}
          mode="date"
          display="spinner"
          onChange={(event, value) => {
            if (value) {
              handleChangeTime(value)
            }
          }}
        />
      </View>
    </View>
  )
}

export default EditDate

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
