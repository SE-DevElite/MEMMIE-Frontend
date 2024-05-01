import React, { useRef, useState } from 'react'
import ButtonBackCommon from '@/common/ButtonBack.common'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserProfileName from '@/components/profile/UserProfileName'
import UserBio from '@/components/profile/UserBio'
import MemoryGroup from '@/components/profile/MemoryGroup'
import { useNavigation } from '@react-navigation/native'
import ProfileBottomSheet from '@/components/profile/ProfileBottomSheet'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import profileStore from '@/stores/ProfileStore'
import { observer } from 'mobx-react'
import { getAccessToken } from '@/helpers/TokenHandler'
import { RequestWithToken } from '@/api/DefaultRequest'

const ProfileScreen: React.FC = observer(() => {
  const navigation = useNavigation()
  const [profile, setProfile] = useState({
    name: profileStore.name,
    username: profileStore.username,
    bio: profileStore.bio,
    gender: profileStore.gender
  })

  const handleChangeProfile = (key: string, value: string) => {
    setProfile(prevState => ({ ...prevState, [key]: value }))
  }

  const handleBackPress = () => {
    navigation.goBack()
  }

  const handleSave = async () => {
    const token = await getAccessToken()

    const body = {
      name: profile.name,
      bio: profile.bio,
      username: profile.username,
      gender: profile.gender
    }

    await RequestWithToken(token as string).patch('/users', body)

    profileStore.name = profile.name
    profileStore.bio = profile.bio
    profileStore.username = profileStore.username
    profileStore.gender = profile.gender
  }

  const editProfileBottomSheetRef = useRef<BottomSheet>(null)
  return (
    <SafeAreaView edges={['right', 'top']} style={{ flex: 1 }}>
      <View style={styles.layout}>
        <ButtonBackCommon handlePress={handleBackPress} text="User Profile" />
        <UserProfileName
          name={profile.name}
          avatar={profileStore.avatar}
          username={profile.username}
          handleClickAvatar={() => editProfileBottomSheetRef.current?.expand()}
        />
        <UserBio bio={profile.bio} />
      </View>

      <View style={{ flex: 1, paddingTop: 16 }}>
        <MemoryGroup memories={profileStore.memories ?? []} />
      </View>

      <ProfileBottomSheet
        name={profile.name}
        username={profile.username}
        bio={profile.bio}
        gender={profile.gender}
        editProfileBottomSheetRef={editProfileBottomSheetRef}
        handleChangeProfile={handleChangeProfile}
        handleSave={handleSave}
      />
    </SafeAreaView>
  )
})

export default ProfileScreen

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16
  }
})
