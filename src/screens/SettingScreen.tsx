import React, { useRef, useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'
import SettingPanel from '@/components/setting/SettingPanel'
import SettingBottomSheetProvider from '@/components/setting/SettingBottomSheetProvider'

const SettingScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text style={styles.textStyle}>Setting</Text>
          <SettingPanel />
        </View>
      </ScrollView>
      {/* <SettingBottomSheetProvider /> */}
    </SafeAreaView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  flexBox: {
    textAlign: 'left'
  },
  flexChild: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 23,
    lineHeight: 30,
    color: themes.light.primary.hex,
    paddingLeft: 30
  }
})
