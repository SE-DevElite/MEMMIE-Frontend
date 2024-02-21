import React, { useRef, useState } from 'react'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import CreateList from '../../components/setting/CreateList'

interface Props {
  createListBottomSheetRef: React.RefObject<BottomSheet>
}

const SettingBottomSheetProvider: React.FC<Props> = props => {
  const { createListBottomSheetRef } = props

  return (
    <>
      <LongBottomSheetCommon ref={createListBottomSheetRef}>
        <CreateList />
      </LongBottomSheetCommon>
    </>
  )
}

export default SettingBottomSheetProvider
