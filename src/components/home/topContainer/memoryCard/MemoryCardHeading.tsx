import React, { useState } from 'react'
import styled from 'styled-components/native'

import { themes } from '@/common/themes/themes'
import { Image, StyleSheet, Text, View } from 'react-native'

const MemoryCardHeading: React.FC = () => {
  const [streak, setStreak] = useState<number>(10)

  return (
    <View style={styles.boxTitle}>
      <View style={styles.titleText}>
        <Text style={styles.titleTextStyle}>Bangkok</Text>
      </View>
      <View style={styles.streakBox}>
        <View style={styles.streakBackground}>
          <View
            style={{
              ...styles.streakCircle,
              padding: streak.toString().length === 1 ? 20 : 7
            }}>
            <Text style={styles.streakTextStyle}>{streak}</Text>
            <Image source={require('@/assets/icons/streak.png')} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default MemoryCardHeading

const styles = StyleSheet.create({
  boxTitle: {
    height: 50,
    flexDirection: 'row'
  },
  titleText: {
    flex: 1,
    justifyContent: 'center',
    fontWeight: 'bold',
    borderTopLeftRadius: 20,
    paddingLeft: 16,
    borderTopRightRadius: 20,
    backgroundColor: themes.light.tertiary.hex
  },
  streakBox: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.light.tertiary.hex
  },
  streakBackground: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  streakCircle: {
    height: 42,
    // width: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: themes.light.tertiary.hex
  },
  streakIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  titleTextStyle: {
    fontSize: 16,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.secondary.hex
  },
  streakTextStyle: {
    fontSize: 15,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.secondary.hex
  }
})
