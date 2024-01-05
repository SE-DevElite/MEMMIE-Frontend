import React from 'react'
import styled from 'styled-components/native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Image, StyleSheet, View } from 'react-native'
import MemoryCardHeading from './MemoryCardHeading'
import MemoryCardBody from './MemoryCardBody'

const MemoryCard: React.FC = () => {
  return (
    <View style={styles.box}>
      <MemoryCardHeading />
      <MemoryCardBody />
    </View>
  )
}

export default MemoryCard

const styles = StyleSheet.create({
  box: {
    flex: 1,
    border: '1px solid blue'
  }
})
