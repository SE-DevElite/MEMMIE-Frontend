import React, { useRef } from 'react'
import EditProfile from './EditProfile'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import SelectGender from './SelectGender'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import profileStore from '@/stores/ProfileStore'

interface Props {
  editProfileBottomSheetRef: React.RefObject<BottomSheetMethods>
  name: string
  username: string
  bio: string
  gender: string
  handleChangeProfile: (key: string, value: string) => void
  handleSave: () => void
}

const ProfileBottomSheet: React.FC<Props> = props => {
  const {
    editProfileBottomSheetRef,
    name,
    username,
    bio,
    gender,
    handleChangeProfile,
    handleSave
  } = props

  const selectGenderBottomSheet = useRef<BottomSheet>(null)

  return (
    <>
      <LongBottomSheetCommon ref={editProfileBottomSheetRef}>
        <EditProfile
          name={name}
          username={username}
          bio={bio}
          avatar={profileStore.avatar}
          gender={gender}
          handleGenderPress={() => selectGenderBottomSheet.current?.expand()}
          handleChangeProfile={handleChangeProfile}
          handleClose={() => editProfileBottomSheetRef.current?.close()}
          handleSave={handleSave}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={selectGenderBottomSheet} snapPoint={['40%']}>
        <SelectGender handleChangeProfile={handleChangeProfile} />
      </LongBottomSheetCommon>
    </>
  )
}

export default ProfileBottomSheet
