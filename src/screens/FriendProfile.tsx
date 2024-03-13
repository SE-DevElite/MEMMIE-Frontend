import React, { useState } from 'react'
import ButtonBackCommon from '@/common/ButtonBack.common'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MemoryGroup from '@/components/profile/MemoryGroup'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import ProfileName from '@/components/friendProfile/ProfileName'
import Bio from '@/components/friendProfile/Bio'
import FollowButton from '@/components/friendProfile/FollowButton'
import Streak from '@/components/friendProfile/Streak'

const FriendProfileScreen: React.FC = observer(() => {
  const navigation = useNavigation()
  const [profile, setProfile] = useState({})

  const handleBackPress = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView edges={['right', 'top']} style={{ flex: 1 }}>
      <View style={styles.layout}>
        <ButtonBackCommon handlePress={handleBackPress} text="Uesr Profile" />
        <View
          style={{
            flexDirection: 'row',
            overflow: 'hidden'
          }}>
          <View style={{ width: '75%' }}>
            <ProfileName name={''} avatar={''} username={''} />
            <Bio bio={''} />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              gap: 8
            }}>
            <FollowButton />
            <Streak />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, paddingTop: 16 }}>
        <MemoryGroup memories={[]} />
      </View>
    </SafeAreaView>
  )
})

export default FriendProfileScreen

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16
  }
})
