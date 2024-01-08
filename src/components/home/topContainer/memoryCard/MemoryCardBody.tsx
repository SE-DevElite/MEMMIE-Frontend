import React from 'react'
import styled from 'styled-components/native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { StyleSheet, Text, View } from 'react-native'
import { themes } from '@/common/themes/themes'

const MemoryCardBody: React.FC = () => {
  return (
    <Box style={styles.box}>
      <View style={styles.imageContainer}></View>
    </Box>
  )
}

export default MemoryCardBody

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: themes.light.primary.hex
  }
})

const Box = styled.View`
  background-color: ${themes.light.tertiary.hex};
`
