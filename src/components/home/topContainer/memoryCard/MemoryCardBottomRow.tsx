import React from 'react'
import SoundIcon from '@/assets/svg/Sound'
import { themes } from '@/common/themes/themes'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MemoryCardBottomRow: React.FC = () => {
  return (
    <View style={memoryStyles.bottomRow}>
      <View style={memoryStyles.soundIconContainer}>
        <TouchableOpacity onPress={() => console.log('click sound')}>
          <View style={memoryStyles.soundIcon}>
            <SoundIcon />
          </View>
        </TouchableOpacity>
      </View>
      <View style={memoryStyles.descriptionContainer}>
        <View style={memoryStyles.descriptionBox}>
          <Text style={memoryStyles.descriptionText} numberOfLines={1}>
            ฉันชอบกินข้าวเหนียวมาก
          </Text>
        </View>
      </View>
    </View>
  )
}

export default MemoryCardBottomRow

const memoryStyles = StyleSheet.create({
  bottomRow: {
    height: 80,
    gap: 5
  },
  soundIconContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  soundIcon: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: 'white',
    borderRadius: 100
  },
  descriptionContainer: {
    backgroundColor: themes.light.tertiary.hex,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 100,
    alignSelf: 'center'
  },
  descriptionBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionText: {
    color: themes.light.secondary.hex,
    fontSize: 13
  }
})
