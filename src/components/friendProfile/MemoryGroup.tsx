import React from 'react'

import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { Memory } from '@/interface/memory_response'
import { themes } from '@/common/themes/themes'

interface Props {
  memories: Memory[]
}

const MemoryGroup: React.FC<Props> = props => {
  const { memories } = props
  const memoryGroupOne = memories?.slice(0, memories.length / 2 + 1)
  const memoryGroupTwo = memories?.slice(memories.length / 2 + 1)

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.flexBox}>
          <View style={{ flex: 1 }}>
            {memoryGroupOne.map(memory => (
              <TouchableOpacity
                key={memory.memory_id}
                onPress={() => console.log(memory.memory_id)}
                style={{ ...styles.imageContainer }}>
                <Image
                  source={{ uri: memory.memory_lists[0].memory_url }}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ flex: 1 }}>
            {memoryGroupTwo.map(memory => (
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => console.log(memory.memory_id)}
                key={memory.memory_id}>
                <Image
                  source={{ uri: memory.memory_lists[0].memory_url }}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default MemoryGroup

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16
  },
  flexBox: {
    flexDirection: 'row',
    gap: 8
  },

  imageContainer: {
    aspectRatio: 1,
    marginBottom: 8,
    overflow: 'hidden',
    borderRadius: 40
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: themes.light.tertiary.hex
  }
})
