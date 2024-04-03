import React from 'react'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import CreateList from '../../components/setting/CreateList'
import { User } from '@/interface/friend_response'

interface Props {
  createListBottomSheetRef: React.RefObject<BottomSheet>
  friend: User[]
}

const SettingBottomSheetProvider: React.FC<Props> = props => {
  const { createListBottomSheetRef, friend } = props

  return (
    <>
      <LongBottomSheetCommon ref={createListBottomSheetRef}>
        <CreateList friend={friend} />
      </LongBottomSheetCommon>
    </>
  )
}

export default SettingBottomSheetProvider
