import React from 'react'
import { themes } from '@/common/themes/themes'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import { TouchableOpacity } from '@gorhom/bottom-sheet'
import { daily_memories } from '@/assets/mocks/daily_memories'

const CalendarTable: React.FC = () => {
  return (
    <View style={styles.container}>
      {daily_memories.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.flexRow}>
          {row.map((value, columnIndex) =>
            value.day === '' ? (
              <View
                style={{ ...styles.dayBox, backgroundColor: 'white' }}
                key={columnIndex}
              />
            ) : (
              <View style={styles.dayBox} key={columnIndex}>
                <ImageBackground
                  source={
                    value.memories.length > 0
                      ? {
                          uri: value.memories[0].memory_image
                        }
                      : require('@/assets/mocks/empty.png')
                  }>
                  <TouchableOpacity onPress={() => console.log(value.date)}>
                    <View
                      style={{
                        ...styles.innerFlex,
                        backgroundColor:
                          value.memories.length > 0
                            ? 'rgba(255,255,255,0.4)'
                            : 'transparent'
                      }}>
                      <Text style={styles.textStyle}>{value.date}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            )
          )}
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
    borderRadius: 15,
    overflow: 'hidden'
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
