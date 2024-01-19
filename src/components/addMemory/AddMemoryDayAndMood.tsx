import { themes } from '@/common/themes/themes'
import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native'

const AddMemoryDayAndMood: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Monday</Text>
        <Text numberOfLines={1} style={styles.descriptionText}>
          King's Mongkut University technology of thonburi
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={() => console.log('Change mood')}>
        <View style={styles.moodContainer}>
          <View style={styles.moodIcon} />
        </View>
      </TouchableWithoutFeedback>
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
    borderRadius: 100
  }
})
