import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { themes } from '@/common/themes/themes'
import SoundIcon from '@/assets/svg/Sound'
import MemoryCardTopRow from './MemoryCardTopRow'
import MemoryCardBottomRow from './MemoryCardBottomRow'

const MemoryCardBody: React.FC = () => {
  return (
    <View style={memoryStyles.box}>
      <View style={memoryStyles.imageContainer}>
        <ImageBackground
          source={require('@/assets/mocks/nut-ronan.png')}
          style={memoryStyles.imageBackground}>
          <View style={memoryStyles.overlayContainer}>
            <MemoryCardTopRow />
            {/* <MemoryCardBottomRow /> */}
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

export default MemoryCardBody

const memoryStyles = StyleSheet.create({
  box: {
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: themes.light.tertiary.hex
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: themes.light.primary.hex,
    overflow: 'hidden'
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10
  }
})
