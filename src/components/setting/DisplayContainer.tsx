import * as React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { themes } from '@/common/themes/themes'

type DisplayContainerType = {
  onTogglePress?: () => void
}

const DisplayContainer = ({ onTogglePress }: DisplayContainerType) => {
  return (
    <View style={styles.display}>
      <Text style={[styles.display1, styles.display1Typo]}>Display</Text>
      <View style={styles.underline} />
      <View style={styles.appearance}>
        <Text style={[styles.appearance1, styles.display1Typo]}>
          Appearance
        </Text>
        <View style={[styles.displayThemeToggle, styles.displayLayout]}>
          <View
            style={[styles.displayThemeToggleChild, styles.displayLayout]}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  display1Typo: {
    textAlign: 'left',
    fontFamily: themes.fonts.regular
  },
  displayLayout: {
    height: 25,
    width: 47,
    top: 0,
    position: 'absolute'
  },
  display1: {
    left: 12,
    fontSize: 12,
    lineHeight: 14,
    color: themes.light.secondary.hex,
    top: 0,
    textAlign: 'left',
    fontFamily: themes.fonts.regular,
    position: 'absolute'
  },
  displayChild: {
    top: 22,
    maxHeight: '100%',
    left: 0,
    position: 'absolute',
    width: 375
  },
  underline: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    top: 22,
    maxHeight: '100%',
    width: 375,
    backgroundColor: themes.light.secondary.hex
  },
  appearance1: {
    fontSize: 14,
    lineHeight: 16,
    color: themes.light.primary.hex,
    display: 'flex',
    width: 88,
    zIndex: 0,
    alignItems: 'center'
  },
  displayThemeToggleChild: {
    borderRadius: 20,
    backgroundColor: themes.light.tertiary.hex,
    left: 0
  },
  displayThemeToggleItem: {
    top: 1,
    left: 2,
    width: 21,
    height: 23,
    position: 'absolute'
  },
  displayThemeToggle: {
    left: 240,
    display: 'none',
    zIndex: 2
  },
  appearance: {
    top: 33,
    left: 33,
    width: 309,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute'
  },
  display: {
    height: 65,
    marginTop: 32,
    width: 375
  }
})

export default DisplayContainer
