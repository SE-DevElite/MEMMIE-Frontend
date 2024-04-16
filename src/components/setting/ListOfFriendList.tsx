import { RequestWithToken } from '@/api/DefaultRequest'
import GarbageIcon from '@/assets/svg/Garbage'
import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import { themes } from '@/common/themes/themes'
import { getAccessToken } from '@/helpers/TokenHandler'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  ActivityIndicator
} from 'react-native'
import { RectButton, Swipeable } from 'react-native-gesture-handler'

interface Props {
  friendList_id: string
  thumbnail: string
  title: string
  amount: number
  onPress: () => void
}

const ListOfFriendList: React.FC<Props> = props => {
  const [waiting, setWaiting] = useState(false)
  const { friendList_id, thumbnail, title, amount, onPress } = props

  const handleDelete = async () => {
    setWaiting(true)
    const token = await getAccessToken()
    const res = await RequestWithToken(token as string).delete(
      `/friendlists/delete/${friendList_id}`
    )

    console.log(res.data)

    if (res.status === 200) {
      setWaiting(false)
    }
  }

  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 1]
    })

    return (
      <RectButton onPress={handleDelete}>
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
          {waiting ? (
            <ActivityIndicator size="small" color="#ffff" />
          ) : (
            <GarbageIcon color="#ffff" />
          )}
        </Animated.View>
      </RectButton>
    )
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.boxList}>
          <View style={styles.circle}>
            <Image style={styles.imageStyle} source={{ uri: thumbnail }} />
          </View>
          <View style={{ width: '70%' }}>
            <Text style={styles.titleTextNewAlbum}>{title}</Text>
            <Text style={styles.subTitleTextNewAlbum}>{amount} people</Text>
          </View>
          <View>
            <NavArrowRightIcon />
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  )
}

export default ListOfFriendList

const styles = StyleSheet.create({
  boxList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    paddingVertical: 10
  },
  circle: {
    width: 40,
    height: 40,
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
    width: 40,
    height: 40,
    borderRadius: 100,
    resizeMode: 'cover'
  }
})
