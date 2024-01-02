import React from 'react'
import Album from './Album'
import MemoryCard from './memoryCard/MemoryCard'
import RandomMemory from './RandomMemory'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

import { StyleSheet, View } from 'react-native'

const MemoryContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Album />
        <RandomMemory />
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
    paddingTop: hp(2),
    paddingBottom: hp(2),
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    gap: 20
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
