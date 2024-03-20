import React, { useRef, useState } from 'react'
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

const FriendProfileScreen: React.FC = observer(() => {
  const navigation = useNavigation()
  const [profile, setProfile] = useState({})
  const [follow, setFollow] = useState(false)
  const unfollowBottomSheetRef = useRef<BottomSheet>(null)

  const handleBackPress = () => {
    navigation.goBack()
  }

  const handleUnfollowPress = () => {
    //fetch to un-follow
    setFollow(false)
    unfollowBottomSheetRef.current?.close()
  }

  const handleCaseFollow = () => {
    if (follow) {
      unfollowBottomSheetRef.current?.expand()
    } else {
      // fetch to follow
      setFollow(true)
    }
  }

  return (
    <SafeAreaView edges={['right', 'top']} style={{ flex: 1 }}>
      <View style={styles.layout}>
        <ButtonBackCommon handlePress={handleBackPress} text="User Profile" />
        <View
          style={{
            flexDirection: 'row',
            overflow: 'hidden'
          }}>
          <View style={{ width: '75%' }}>
            <ProfileName name={''} avatar={''} username={''} />
            <Bio bio={''} />
          </View>

          <View style={styles.btnGroup}>
            <FollowButton
              handlefollowPress={handleCaseFollow}
              follow={follow}
            />
            <Streak />
          </View>
        </View>
      </View>

      <View style={{ flex: 1, paddingTop: 16 }}>
        <MemoryGroup memories={[]} />
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
