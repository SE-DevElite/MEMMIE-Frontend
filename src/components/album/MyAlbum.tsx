import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import PlusIcon from '@/assets/svg/Plus'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MyAlbumList from './MyAlbumList'

const MyAlbum: React.FC = () => {
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

      <TouchableOpacity
        style={{ ...styles.layout }}
        onPress={() => console.log('create new album')}>
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

      <View style={{ ...styles.layout, gap: 20 }}>
        <MyAlbumList
          title="Travel"
          amount={20}
          thumbnail={require('@/assets/mocks/nutthanon-avatar.jpg')}
        />
        <MyAlbumList
          title="BFF"
          amount={40}
          thumbnail={require('@/assets/mocks/nutthanon-rb.png')}
        />
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
    marginVertical: 20
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
