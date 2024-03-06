import React from 'react'
import { themes } from '@/common/themes/themes'
import { Memory } from '@/interface/album_response'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import Picture from './Picture'

interface Props {
  memories: Memory[] | undefined
}

const PictureList: React.FC<Props> = props => {
  const { memories } = props

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.flexBox}>
          {memories &&
            memories.map((memory, index) => (
              <Picture key={index} memory={memory} />
            ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default PictureList

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    paddingTop: 16
  },
  scrollViewContent: {
    // flexGrow: 1
  },
  flexBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    width: '100%',
    paddingBottom: 70
  },
  imageContainer: {
    marginBottom: 8,
    width: '48%',
    position: 'relative'
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 32,
    backgroundColor: themes.light.tertiary.hex
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: themes.light.tertiary.hex,
    right: 12
  }
})
