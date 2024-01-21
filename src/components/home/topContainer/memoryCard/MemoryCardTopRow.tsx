import { themes } from '@/common/themes/themes'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MemoryCardTopRow: React.FC = () => {
  return (
    <View style={memoryStyles.topRow}>
      <View style={memoryStyles.dateColumn}>
        <Text style={memoryStyles.dateText}>Mon, 12</Text>
        <Text style={memoryStyles.mediumDateText}>December 2023</Text>
        <Text
          style={memoryStyles.locationText}
          numberOfLines={1}
          ellipsizeMode="tail">
          15:15 king mongkut's university of technology thonburi
        </Text>
      </View>

      <View style={memoryStyles.iconsColumn}>
        <View style={memoryStyles.icon}></View>
        <View style={memoryStyles.icon}></View>
      </View>
    </View>
  )
}

export default MemoryCardTopRow

const memoryStyles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  dateColumn: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dateText: {
    fontFamily: themes.fonts.light,
    fontSize: 13,
    color: 'white'
  },
  mediumDateText: {
    fontFamily: themes.fonts.medium,
    fontSize: 13,
    color: 'white'
  },
  locationText: {
    fontFamily: themes.fonts.light,
    fontSize: 12,
    color: 'white',
    width: 130
  },
  iconsColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 5
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: 'white',
    borderRadius: 100
  }
})
