import React, { useState } from 'react'

import { themes } from '@/common/themes/themes'
import { Image, StyleSheet, Text, View } from 'react-native'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'

const MemoryCardHeading: React.FC = observer(() => {
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
              padding: 10
            }}>
            <Text style={styles.streakTextStyle}>{profileStore.streak}</Text>
            <Image source={require('@/assets/icons/streak.png')} />
          </View>
        </View>
      </View>
    </View>
  )
})

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
    width: profileStore.streak.toString().length > 1 ? '40%' : '30%',
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
    minWidth: 42,
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
