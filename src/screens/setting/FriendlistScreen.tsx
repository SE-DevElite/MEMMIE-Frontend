import React, { useEffect, useRef, useState } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FriendlistContainer from '@/components/setting/FriendlistContainer'
import { themes } from '@/common/themes/themes'
import SettingBottomSheetProvider from '@/screens/setting/SettingBottomSheetProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import ButtonBackCommon from '@/common/ButtonBack.common'
import { User } from '@/interface/friend_response'
import useFriend from '@/hooks/useFriend'
import { FriendList } from '@/interface/friendList_response'
import { WindowScreen } from '@/common/consts/ConfigScreen'

const Friendlist: React.FC = () => {
  const { friend } = useFriend()
  const [userFriend, setUserFriend] = useState<User[]>(friend?.user || [])
  const navigation = useNavigation()
  const createListBottomSheetRef = useRef<BottomSheet>(null)
  const updateListBottomSheetRef = useRef<BottomSheet>(null)

  const onCreateListPress = () => createListBottomSheetRef.current?.expand()
  const [friendListName, setFriendListName] = useState('')
  const [userInFriendList, setUserInFriendList] = useState<User[]>([])
  const [friendListId, setFriendListId] = useState('')

  const handlePressFriendList = (friendList: FriendList) => {
    setFriendListName(friendList.name)
    setFriendListId(friendList.friend_list_id)

    const user: User[] = []
    const friendId = friendList.friend_id.map(friend => friend.user_id)

    userFriend.map(friend => {
      if (friendId.includes(friend.user_id)) {
        user.push(friend)
      }
    })
    setUserInFriendList(user)

    updateListBottomSheetRef.current?.expand()
  }

  useEffect(() => {
    setUserFriend(friend?.user || [])
  }, [friend])

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['right', 'top']}>
      <View style={styles.layout}>
        <View style={{ paddingHorizontal: 32 }}>
          <ButtonBackCommon
            text=""
            handlePress={() => {
              navigation.goBack()
            }}
          />
        </View>

        <View style={{ padding: 32 }}>
          <View>
            <Text style={styles.textTitleStyle}>Friend lists</Text>
          </View>
          <Text style={styles.textSubTitleStyle}>
            Create your friend list to customize memory accessibility of you and
            your friends.
          </Text>
        </View>

        <FriendlistContainer
          onCreateListPress={onCreateListPress}
          onFriendListPress={handlePressFriendList}
        />
      </View>

      <SettingBottomSheetProvider
        select_friendList_id={friendListId}
        createListBottomSheetRef={createListBottomSheetRef}
        updateListBottomSheetRef={updateListBottomSheetRef}
        friend={userFriend}
        select_friendList_name={friendListName}
        select_friendList_user={userInFriendList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,

  },
  textTitleStyle: {
    fontFamily: themes.fonts.samiBold,
    fontSize: 22,
    color: themes.light.primary.hex,
    paddingBottom: 8
  },
  textSubTitleStyle: {
    fontFamily: themes.fonts.light,
    fontSize: 14,
    color: themes.light.primary.hex,
    display: 'flex',
    alignItems: 'center',
    width: 301,
    marginTop: 8
  },
  title: {
    top: 152,
    left: 35,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  backToSetting: {
    left: WindowScreen.Width / 23.2,
    top: WindowScreen.Height / 7.4 - WindowScreen.Height,
    width: 61,
    height: 61,
    borderRadius: 30.5,
    backgroundColor: themes.light.tertiary.hex
  },
  iconContainer: {
    width: 61,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center'
  },
  friendlist: {
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%'
  }
})

export default Friendlist
