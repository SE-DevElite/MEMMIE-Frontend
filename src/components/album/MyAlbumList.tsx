import React from 'react'
import { themes } from '@/common/themes/themes'
import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import { Image, StyleSheet, Text, View, Animated } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'
import GarbageIcon from '@/assets/svg/Garbage'
import { TouchableOpacity } from '@gorhom/bottom-sheet'

interface Props {
  album_id: string
  thumbnail: string
  title: string
  amount: number
  handleDelete: (album_id: string) => void
  handlePressAlbum: () => void
}

const MyAlbumList: React.FC<Props> = props => {
  const { album_id, title, amount, thumbnail, handleDelete, handlePressAlbum } =
    props

  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 1]
    })

    return (
      <RectButton onPress={() => handleDelete(album_id)}>
        <Animated.View
          style={[
            {
              transform: [{ translateX: trans }],
              backgroundColor: themes.light.secondary.hex,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: 70,
              zIndex: 2
            }
          ]}>
          <GarbageIcon color="#ffff" />
        </Animated.View>
      </RectButton>
    )
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={handlePressAlbum}>
        <View style={styles.boxList}>
          <View style={styles.circle}>
            <Image style={styles.imageStyle} source={{ uri: thumbnail }} />
          </View>
          <View style={{ width: '70%' }}>
            <Text style={styles.titleTextNewAlbum}>{title}</Text>
            <Text style={styles.subTitleTextNewAlbum}>{amount} memories</Text>
          </View>
          <View>
            <NavArrowRightIcon />
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  )
}

export default MyAlbumList

const styles = StyleSheet.create({
  boxList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    paddingVertical: 10
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
