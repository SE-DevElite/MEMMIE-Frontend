import React from 'react'
import Album from './Album'
import MemoryCard from './memoryCard/MemoryCard'
import RandomMemory from './RandomMemory'

import { StyleSheet, View } from 'react-native'

interface Props {
  onAddAlbumPress: () => void
  onAddMemoryPress: () => void
}

const MemoryContainer: React.FC<Props> = props => {
  const { onAddAlbumPress, onAddMemoryPress } = props

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Album onAddAlbumPress={onAddAlbumPress} />
        <RandomMemory onAddMemoryPress={onAddMemoryPress} />
      </View>
      <View style={styles.column}>
        <MemoryCard />
      </View>
    </View>
  )
}

export default MemoryContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    gap: 16
  }
})

// const Container = styled.View`
//   flex: 1;
//   padding: 32px 0;
//   border: 1px solid green;

//   flex-direction: row;
// `

// const Column = styled.View`
//   flex: 1;
//   flex-direction: column;

//   gap: 20px;
// `
