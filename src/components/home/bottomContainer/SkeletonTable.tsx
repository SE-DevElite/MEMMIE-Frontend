import { themes } from '@/common/themes/themes'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import uuid from 'react-native-uuid'

const SkeletonTable: React.FC = () => {
  const arr = new Array(5).fill(0).map(() => new Array(7).fill(0))

  return (
    <>
      {arr.map((row, rowIndex) => (
        <View key={uuid.v4() as string} style={styles.flexRow}>
          {row.map(columnIndex => (
            <View
              style={{
                ...styles.dayBox,
                backgroundColor: themes.light.tertiary.hex
              }}
              key={uuid.v4() as string}
            />
          ))}
        </View>
      ))}
    </>
  )
}

export default SkeletonTable

const styles = StyleSheet.create({
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
  }
})
