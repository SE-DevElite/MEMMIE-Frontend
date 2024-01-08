import React from 'react'
import { themes } from '@/common/themes/themes'
import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  thumbnail: NodeRequire
  title: string
  amount: number
}

const MyAlbumList: React.FC<Props> = props => {
  const { title, amount, thumbnail } = props

  return (
    <View style={styles.boxList}>
      <View style={styles.circle}>
        <Image style={styles.imageStyle} source={thumbnail} />
      </View>
      <View style={{ width: '70%' }}>
        <Text style={styles.titleTextNewAlbum}>{title}</Text>
        <Text style={styles.subTitleTextNewAlbum}>{amount} memories</Text>
      </View>
      <View>
        <NavArrowRightIcon />
      </View>
    </View>
  )
}

export default MyAlbumList

const styles = StyleSheet.create({
  boxList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 20,
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
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: 'cover'
  }
})
