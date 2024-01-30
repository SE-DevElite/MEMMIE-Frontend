import React from 'react'
import { themes } from '@/common/themes/themes'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'

interface Props {
  date: number
  month: string
  year: number
  hour: number
  minute: number
  handleEditDate: () => void
}

const AddMemorySelectTime: React.FC<Props> = props => {
  const { date, month, year, hour, minute, handleEditDate } = props

  const collectDate = [date, month, year]

  return (
    <View style={styles.container}>
      <View style={styles.dateSection}>
        {collectDate.map((item, index) => (
          <View style={styles.dateItemContainer} key={index}>
            <TouchableOpacity onPress={handleEditDate}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateTextStyle}>{item}</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.timeTextStyle}>
                {index === 0 ? 'Date' : index === 1 ? 'Month' : 'Year'}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View>
        <View style={styles.timeInnerContainer}>
          <TouchableWithoutFeedback
            onPress={() => console.log('change waether')}>
            <View style={styles.weatherIcon}></View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => console.log('change time')}>
            <View>
              <Text style={styles.timeText}>
                {hour} : {minute}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default AddMemorySelectTime

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateSection: {
    flexDirection: 'row',
    gap: 10
  },
  dateItemContainer: {
    flexDirection: 'column',
    gap: 10
  },
  dateContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 40,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: themes.light.tertiary.hex
  },
  dateTextStyle: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 17,
    color: themes.light.secondary.hex
  },
  timeTextStyle: {
    fontFamily: themes.fonts.regular,
    fontSize: 12,
    color: themes.light.primary.hex
  },
  timeInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  weatherIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#d5d5d5d5',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeText: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 20,
    color: themes.light.primary.hex
  }
})
