import React, { useRef, useState } from 'react'
import ButtonBackCommon from '@/common/ButtonBack.common'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserProfileName from '@/components/profile/UserProfileName'
import UserBio from '@/components/profile/UserBio'
import MemoryGroup from '@/components/profile/MemoryGroup'
import { useNavigation } from '@react-navigation/native'
import ProfileBottomSheet from '@/components/profile/ProfileBottomSheet'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation()
  const [profile, setProfile] = useState({
    name: 'Watcharapol Treesatthayasakul',
    username: 'Wtxxd',
    bio: 'Sheee weed man saoo',
    gender: 'Male'
  })

  const handleChangeProfile = (key: string, value: string) => {
    setProfile(prevState => ({ ...prevState, [key]: value }))
  }

  const handleBackPress = () => {
    navigation.goBack()
  }

  const editProfileBottomSheetRef = useRef<BottomSheet>(null)
  return (
    <SafeAreaView edges={['right', 'top']}>
      <View style={styles.layout}>
        <ButtonBackCommon handlePress={handleBackPress} text="User Profile" />
        <UserProfileName
          name={profile.name}
          username={profile.username}
          handleClickAvatar={() => editProfileBottomSheetRef.current?.expand()}
        />
        <UserBio bio={profile.bio} />
        <MemoryGroup />
      </View>
      <ProfileBottomSheet
        name={profile.name}
        username={profile.username}
        bio={profile.bio}
        gender={profile.gender}
        editProfileBottomSheetRef={editProfileBottomSheetRef}
        handleChangeProfile={handleChangeProfile}
      />
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
    height: '100%'
  }
})
