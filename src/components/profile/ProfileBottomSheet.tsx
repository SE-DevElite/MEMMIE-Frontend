import React, { useRef } from 'react'
import EditProfile from './EditProfile'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import SelectGender from './SelectGender'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

interface Props {
  editProfileBottomSheetRef: React.RefObject<BottomSheetMethods>
  name: string
  username: string
  bio: string
  gender: string
  handleChangeProfile: (key: string, value: string) => void
}

const ProfileBottomSheet: React.FC<Props> = props => {
  const {
    editProfileBottomSheetRef,
    name,
    username,
    bio,
    gender,
    handleChangeProfile
  } = props

  const selectGenderBottomSheet = useRef<BottomSheet>(null)

  return (
    <>
      <LongBottomSheetCommon ref={editProfileBottomSheetRef}>
        <EditProfile
          name={name}
          username={username}
          bio={bio}
          gender={gender}
          handleGenderPress={() => selectGenderBottomSheet.current?.expand()}
          handleChangeProfile={handleChangeProfile}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={selectGenderBottomSheet} snapPoint={['40%']}>
        <SelectGender handleChangeProfile={handleChangeProfile} />
      </LongBottomSheetCommon>
    </>
  )
}

export default ProfileBottomSheet
