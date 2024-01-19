import React from 'react'
import ButtonBackCommon from '@/common/ButtonBack.common'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserProfileName from '@/components/profile/UserProfileName'
import UserBio from '@/components/profile/UserBio'
import MemoryGroup from '@/components/profile/MemoryGroup'

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView edges={['right', 'top']}>
      <View style={styles.layout}>
        <ButtonBackCommon
          handlePress={() => console.log('user profile')}
          text="User Profile"
        />
        <UserProfileName />
        <UserBio />
        <MemoryGroup />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16,
    // backgroundColor: 'blue',
    height: '100%'
  }
})
