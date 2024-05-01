import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { themes } from '@/common/themes/themes'
import MemoryCardTopRow from './MemoryCardTopRow'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'

const MemoryCardBody: React.FC = observer(() => {
  const [imageShown, setImageShown] = useState('')

  return (
    <View style={memoryStyles.box}>
      <View style={memoryStyles.imageContainer}>
        <ImageBackground
          source={{ uri: profileStore.curr_album as string }}
          style={memoryStyles.imageBackground}>
          <View style={memoryStyles.overlayContainer}>
            <MemoryCardTopRow />
          </View>
        </ImageBackground>
      </View>
    </View>
  )
})

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
