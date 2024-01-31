import React, { useRef } from 'react'
import EditProfile from './EditProfile'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import SelectGender from './SelectGender'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

interface Props {
  editProfileBottomSheetRef: React.RefObject<BottomSheetMethods>
  name: String
  username: String
  bio: String
  gender: String
}

const ProfileBottomSheet: React.FC<Props> = props => {
  const { editProfileBottomSheetRef, name, username, bio, gender } = props

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
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={selectGenderBottomSheet} snapPoint={['40%']}>
        <SelectGender />
      </LongBottomSheetCommon>
    </>
  )
}

export default ProfileBottomSheet
