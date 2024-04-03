import NavArrowRightIcon from '@/assets/svg/NavArrowRight'
import { themes } from '@/common/themes/themes'
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface Props {
  user_id: string
  name: string
  username: string
  avatar: string
}

const ListUserProfile: React.FC<Props> = props => {
  const navigation = useNavigation()
  const { user_id, name, username, avatar } = props

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          navigation.navigate('FriendProfileScreen', {
            user_id: user_id
          })
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            paddingVertical: 5
          }}>
          <Image
            source={{ uri: avatar }}
            style={{ width: 45, height: 45, borderRadius: 100 }}
          />
          <View style={{ flexDirection: 'column', flexGrow: 1 }}>
            <Text numberOfLines={1} style={styles.usernameStyle}>
              {username}
            </Text>
            <Text numberOfLines={1} style={styles.nameStyle}>
              {name}
            </Text>
          </View>
          <NavArrowRightIcon />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListUserProfile

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 14,
    fontFamily: themes.fonts.regular,
    color: themes.light.primary.hex
  },
  usernameStyle: {
    fontSize: 10,
    fontFamily: themes.fonts.light,
    color: themes.light.primary.hex
  }
})
