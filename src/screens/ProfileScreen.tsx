import React from 'react'
import ButtonBackCommon from '@/common/ButtonBack.common'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserProfileName from '@/components/profile/UserProfileName'
import UserBio from '@/components/profile/UserBio'
import MemoryGroup from '@/components/profile/MemoryGroup'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation()
  const handleBackPress = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView edges={['right', 'top']}>
      <View style={styles.layout}>
        <ButtonBackCommon handlePress={handleBackPress} text="User Profile" />
        <UserProfileName />
        <UserBio />
        <MemoryGroup />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
    height: '100%',
  },
})