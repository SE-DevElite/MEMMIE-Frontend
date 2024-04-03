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

const Friendlist: React.FC = () => {
  const { friend } = useFriend()
  const [userFriend, setUserFriend] = useState<User[]>(friend?.user || [])
  const navigation = useNavigation()
  const createListBottomSheetRef = useRef<BottomSheet>(null)
  const onCreateListPress = () => createListBottomSheetRef.current?.expand()

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

        <FriendlistContainer onCreateListPress={onCreateListPress} />
      </View>

      <SettingBottomSheetProvider
        createListBottomSheetRef={createListBottomSheetRef}
        friend={userFriend}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1
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
    color: themes.light.primary.hex
  }
})

export default Friendlist
