import React, { useEffect } from 'react'
import { themes } from '@/common/themes/themes'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import profileStore from '@/stores/ProfileStore'

interface Props {
  onAddAlbumPress: () => void
}

const Album: React.FC<Props> = props => {
  const { onAddAlbumPress } = props

  const handleChangePicture = (id: string) => {
    profileStore.currAlbumInit(id)
  }

  return (
    <View style={styles.box}>
      <View style={styles.flex}>
        <Text style={styles.textStyle}>Albums</Text>
        <TouchableOpacity style={styles.circleTouch} onPress={onAddAlbumPress}>
          <Image
            style={styles.icon}
            source={require('@/assets/icons/add.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {profileStore.albums.map(album => (
            <TouchableWithoutFeedback
              onPress={() => handleChangePicture(album.album_id)}
              key={album.album_id}>
              <View style={styles.albumContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: album.album_thumbnail }}
                    style={styles.albumImage}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text
                    style={styles.albumTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {album.album_name}
                  </Text>
                  <Text style={styles.albumCount}>{album.memories}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 170,
    borderRadius: 30,
    padding: 13,
    backgroundColor: themes.light.tertiary.hex
  },
  flex: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 14,
    color: themes.light.secondary.hex,
    fontFamily: themes.fonts.samiBold
  },
  circleTouch: {
    width: 32,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 11,
    height: 11
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 4
  },
  albumContainer: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 10
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  albumImage: {
    resizeMode: 'cover',
    width: 125,
    height: 82
  },
  textContainer: {
    paddingLeft: 10,
    paddingTop: 2,
    flex: 1,
    flexDirection: 'column'
  },
  albumTitle: {
    fontSize: 12,
    fontFamily: themes.fonts.medium,
    color: themes.light.secondary.hex,
    width: 100
  },
  albumCount: {
    fontSize: 10,
    fontFamily: themes.fonts.medium,
    color: themes.light.secondary.hex
  }
})
