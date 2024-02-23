import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import PlusIcon from '@/assets/svg/Plus'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MyAlbumList from './MyAlbumList'
import profileStore from '@/stores/ProfileStore'

interface Props {
  handlePress: () => void
}

const MyAlbum: React.FC<Props> = props => {
  const { handlePress } = props

  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <View style={styles.boxHeading}>
          <View>
            <Text style={styles.textHeading}>My album</Text>
          </View>
          <View>
            <Text style={styles.textSubHeading}>
              you can create your memory album and select which album will
              appear
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{ ...styles.layout }} onPress={handlePress}>
        <View style={styles.boxNewAlbum}>
          <View style={styles.circle}>
            <PlusIcon color="white" />
          </View>
          <View style={{ width: '70%' }}>
            <Text style={styles.titleTextNewAlbum}>Create a new album</Text>
            <Text style={styles.subTitleTextNewAlbum}>
              Albums, you choose memory to create your memory album.
            </Text>
          </View>
          <View>
            <NavArrowRightIcon />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View>
        {profileStore.albums.map(album => (
          <MyAlbumList
            key={album.album_id}
            album_id={album.album_id}
            title={album.album_name}
            amount={album.memories}
            thumbnail={album.album_thumbnail}
            handleDelete={() => console.log('tester')}
          />
        ))}
      </View>
    </View>
  )
}

export default MyAlbum

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  layout: {
    paddingHorizontal: 20
  },
  boxHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 10,
    paddingVertical: 40
  },
  textHeading: {
    fontSize: 22,
    fontFamily: themes.fonts.samiBold,
    color: themes.light.primary.hex
  },
  textSubHeading: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex,
    textAlign: 'center'
  },
  divider: {
    height: 1,
    backgroundColor: themes.light.primary.hex,
    marginTop: 20
  },
  boxNewAlbum: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: themes.light.secondary.hex,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextNewAlbum: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  subTitleTextNewAlbum: {
    fontSize: 12,
    fontFamily: themes.fonts.regular,
    color: themes.light.secondary.hex
  }
})
