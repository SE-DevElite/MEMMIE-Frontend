import React from 'react'
import styled from 'styled-components/native'
import { themes } from '@/common/themes/themes'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

const RandomMemory: React.FC = () => {
  return <Box style={styles.box}></Box>
}

export default RandomMemory

const styles = StyleSheet.create({
  box: {
    width: wp(43),
    height: hp(16),
    borderRadius: 20,
    padding: 13,
    backgroundColor: themes.light.tertiary.hex
  }
})

const Box = styled.View`
  background-color: ${themes.light.tertiary.hex};
`
