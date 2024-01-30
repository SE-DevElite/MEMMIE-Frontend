import React, { useState } from 'react'
import { themes } from '@/common/themes/themes'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker'

interface Props {
  handleClose: () => void
  handleSaveEditDate: (date: Date) => void
}

const EditDate: React.FC<Props> = props => {
  const { handleClose, handleSaveEditDate } = props
  const [date, setDate] = useState(new Date())

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.headerGroup}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.buttonStyle}>Cancel</Text>
          </TouchableOpacity>

          <Text style={styles.headingTextStyles}>Edit date</Text>

          <TouchableOpacity onPress={() => handleSaveEditDate(date)}>
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
          value={date}
          mode="date"
          display="spinner"
          onChange={(event, value) => {
            setDate(value || new Date())
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
