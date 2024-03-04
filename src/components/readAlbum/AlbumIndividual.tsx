import { themes } from '@/common/themes/themes'
import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import AlbumIndividualBadgeGroup from './AlbumIndividualBadgeGroup'
import PictureList from './PictureList'
import { observer } from 'mobx-react'
import readAlbumStore from '@/stores/ReadAlbumStore'

const AlbumIndividual: React.FC = observer(props => {
  const [wait, setWait] = useState<boolean>(false)

  const handleSave = async () => {
    readAlbumStore.updateAlbum()
  }

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
          <AlbumIndividualBadgeGroup
            badgeText={readAlbumStore.pickedAlbum?.tag_name}
          />
        </View>
      </View>

      <View style={{ ...styles.layout, flex: 1 }}>
        <PictureList memories={readAlbumStore.pickedAlbum?.memories} />
      </View>

      <TouchableOpacity onPress={handleSave}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 26,
            position: 'absolute',
            bottom: 25
          }}>
          <View
            style={{
              backgroundColor: themes.light.tertiary.hex,
              height: 50,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {wait ? (
              <ActivityIndicator
                color={themes.light.primary.hex}
                size="small"
              />
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: themes.fonts.regular,
                  color: themes.light.secondary.hex
                }}>
                Update
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
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
