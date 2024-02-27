import { themes } from '@/common/themes/themes'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BestFriendForeverBadgeGroup from './AlbumIndividualBadgeGroup'
import PictureList from './PictureList'
import { observer } from 'mobx-react'
import readAlbumStore from '@/stores/ReadAlbumStore'

const AlbumIndividual: React.FC = observer(props => {
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>
            {readAlbumStore.pickedAlbum?.album_name}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={{ ...styles.layout, paddingBottom: 20 }}>
        <View style={styles.tagGroup}>
          <Text style={styles.albumTitle}>Album Tag</Text>
          <BestFriendForeverBadgeGroup
            badgeText={readAlbumStore.pickedAlbum?.tag_name}
          />
        </View>
      </View>

      <View style={{ ...styles.layout, flex: 1 }}>
        <PictureList memories={readAlbumStore.pickedAlbum?.memories} />
      </View>
    </View>
  )
})

export default AlbumIndividual

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
