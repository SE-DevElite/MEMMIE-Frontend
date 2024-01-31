import React, { useRef, useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { themes } from '@/common/themes/themes'
import SettingPanel from '@/components/setting/SettingPanel'

const SettingScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <TextStyle>Setting</TextStyle>
          <SettingPanel />
        </View>
      </ScrollView>
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
  }
})

const TextStyle = styled.Text`
  font-family: ${themes.fonts.samiBold};
  font-size: 23px;
  line-height: 30px;
  color: ${themes.light.primary.hex};
  fontweight: '600';
  top: 50;
  left: 30;
`
