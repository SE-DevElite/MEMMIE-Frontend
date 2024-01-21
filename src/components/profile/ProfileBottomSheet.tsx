import React, { useRef } from 'react'
import EditProfile from './EditProfile'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import SelectGender from './SelectGender'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

interface Props {
  editProfileBottomSheetRef: React.RefObject<BottomSheetMethods>
}

const ProfileBottomSheet: React.FC<Props> = props => {
  const { editProfileBottomSheetRef } = props

  const selectGenderBottomSheet = useRef<BottomSheet>(null)

  return (
    <>
      <LongBottomSheetCommon ref={editProfileBottomSheetRef}>
        <EditProfile
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
