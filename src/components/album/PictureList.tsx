import { Memory } from '@/interface/memory_response'
import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

interface Props {
  memories: Memory[]
}

const PictureList: React.FC<Props> = props => {
  const { memories } = props

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.flexBox}>
          {memories &&
            memories.map((memory, index) => (
              <TouchableOpacity key={index} style={styles.imageContainer}>
                <Image
                  source={{ uri: memory.memory_lists[0].memory_url }}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
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
    width: '100%'
  },
  imageContainer: {
    marginBottom: 8,
    width: '48%'
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 32
  }
})
