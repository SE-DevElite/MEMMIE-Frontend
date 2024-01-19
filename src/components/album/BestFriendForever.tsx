import { themes } from '@/common/themes/themes'
import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import BestFriendForeverBadgeGroup from './BestFriendForeverBadgeGroup'
import PictureList from './PictureList'

const BestFriendForever: React.FC = () => {
  const image = [
    require('@/assets/mocks/nutthanon-avatar.jpg'),
    require('@/assets/mocks/nutthanon-rb.png'),
    require('@/assets/mocks/nutthanon-avatar.jpg'),
    require('@/assets/mocks/nutthanon-rb.png'),
    require('@/assets/mocks/nut-riw-ronan.png')
  ]

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>BFF</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ ...styles.layout, paddingBottom: 20 }}>
        <View style={styles.tagGroup}>
          <Text style={styles.albumTitle}>Album Tag</Text>

          <BestFriendForeverBadgeGroup
            badgeText={['Best friend', 'NUTTHANON']}
          />
        </View>
      </View>

      <View style={{ ...styles.layout, flex: 1 }}>
        <PictureList image={image} />
      </View>
    </View>
  )
}

export default BestFriendForever

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  layout: {
    paddingHorizontal: 20
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginVertical: 20
  },
  tagGroup: {
    gap: 10
  },
  albumTitle: {
    fontSize: 16,
    fontFamily: themes.fonts.medium,
    color: themes.light.primary.hex
  }
})
