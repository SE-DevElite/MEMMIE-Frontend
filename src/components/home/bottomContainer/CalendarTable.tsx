import React from 'react'
import { themes } from '@/common/themes/themes'
import { Text, View, StyleSheet } from 'react-native'

import { TouchableOpacity } from '@gorhom/bottom-sheet'

const CalendarTable: React.FC = () => {
  const twoDArray = Array.from({ length: 5 }, () => Array(7).fill(0))

  return (
    <View style={styles.container}>
      {twoDArray.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.flexRow}>
          {row.map((_, columnIndex) => (
            <View style={styles.dayBox} key={columnIndex}>
              <TouchableOpacity onPress={() => console.log(columnIndex + 1)}>
                <View style={styles.innerFlex}>
                  <Text style={styles.textStyle}>{columnIndex + 1}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

export default CalendarTable

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red'
  },
  flexRow: {
    flexDirection: 'row'
    // gap: 5
  },
  dayBox: {
    flex: 1,
    width: 45,
    height: 45,
    backgroundColor: themes.light.tertiary.hex,
    alignItems: 'center',
    margin: 3,
    borderRadius: 15
  },
  innerFlex: {
    flex: 1,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  textStyle: {
    fontFamily: themes.fonts.bold,
    color: themes.light.primary.hex,
    fontSize: 15
  }
})
