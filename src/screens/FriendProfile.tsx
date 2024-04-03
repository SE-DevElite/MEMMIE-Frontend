import React, { useEffect, useRef, useState } from 'react'
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
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import UnFollowBottomSheet from '@/components/friendProfile/UnFollowButton'
import useFriendProfile from '@/hooks/useFriendProfile'
import { getAccessToken } from '@/helpers/TokenHandler'
import { RequestWithToken } from '@/api/DefaultRequest'

const FriendProfileScreen: React.FC = observer(() => {
  const navigation = useNavigation()
  const { profile, memories, isFollow } = useFriendProfile(
    '4b06eb1e-6929-4ca2-8d1c-554dd9c092ed'
  )
  const [follow, setFollow] = useState(isFollow)
  const unfollowBottomSheetRef = useRef<BottomSheet>(null)

  useEffect(() => {
    setFollow(isFollow)
  }, [isFollow])

  const followOrUnfollow = async () => {
    const token = await getAccessToken()
    const body = {
      follow_id: profile?.user.user_id
    }
    await RequestWithToken(token as string).post('/follows', body)
  }

  const handleUnfollowPress = async () => {
    //fetch to un-follow
    await followOrUnfollow()
    setFollow(false)
    unfollowBottomSheetRef.current?.close()
  }

  const handleCaseFollow = async () => {
    if (follow) {
      unfollowBottomSheetRef.current?.expand()
    } else {
      // fetch to follow
      await followOrUnfollow()
      setFollow(true)
    }
  }

  return (
    <SafeAreaView edges={['right', 'top']} style={{ flex: 1 }}>
      <View style={styles.layout}>
        <ButtonBackCommon
          handlePress={() => navigation.goBack()}
          text="User Profile"
        />
        <View
          style={{
            flexDirection: 'row',
            overflow: 'hidden'
          }}>
          <View style={{ width: '75%' }}>
            <ProfileName
              name={profile?.user.name}
              avatar={profile?.user.avatar}
              username={profile?.user.username}
            />
            <Bio bio={profile?.user.bio} />
          </View>

          <View style={styles.btnGroup}>
            <FollowButton
              handlefollowPress={handleCaseFollow}
              follow={follow}
            />
            <Streak streak={profile?.streak || 0} />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, paddingTop: 16 }}>
        <MemoryGroup memories={memories?.memory || []} />
      </View>

      <LongBottomSheetCommon ref={unfollowBottomSheetRef} snapPoint={['50%']}>
        <UnFollowBottomSheet
          handleUnfollowPress={handleUnfollowPress}
          handleCancelPress={() => unfollowBottomSheetRef.current?.close()}
        />
      </LongBottomSheetCommon>
    </SafeAreaView>
  )
})

export default FriendProfileScreen

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 16
  },
  btnGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    gap: 8
  }
})
