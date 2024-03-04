import React, { useRef } from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FriendlistContainer from '@/components/setting/FriendlistContainer'
import Arrowback from '@/assets/svg/Arrowback'
import { themes } from '@/common/themes/themes'
import SettingBottomSheetProvider from '@/screens/setting/SettingBottomSheetProvider'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

const Friendlist: React.FC = () => {
  const navigation = useNavigation()
  const createListBottomSheetRef = useRef<BottomSheet>(null)
  const onCreateListPress = () => createListBottomSheetRef.current?.expand()
  return (
    <View style={styles.friendlist}>
      <View style={styles.title}>
        <View style={styles.friendlist1}>
          <Text style={[styles.friendLists, styles.friendFlexBox]}>
            Friend lists
          </Text>
        </View>
        <Text style={[styles.createYourFriend, styles.friendFlexBox]}>
          Create your friend list to customize memory accessibility of you and
          your friends.
        </Text>
      </View>
      <Pressable
        style={styles.backToSetting}
        onPress={() => navigation.navigate('SettingScreen' as never)}>
        <View style={styles.iconContainer}>
          <Arrowback />
        </View>
      </Pressable>
      <FriendlistContainer onCreateListPress={onCreateListPress} />
      <SettingBottomSheetProvider
        createListBottomSheetRef={createListBottomSheetRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  friendFlexBox: {
    textAlign: 'left',
    color: themes.light.primary.hex
  },
  friendLists: {
    top: 0,
    left: 0,
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '600',
    fontFamily: themes.fonts.samiBold,
    position: 'absolute'
  },
  friendlist1: {
    width: 109,
    height: 23
  },
  createYourFriend: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '300',
    fontFamily: themes.fonts.light,
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
    position: 'absolute',
    left: 16,
    top: 59,
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
