import React, { useRef, useState } from 'react'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'

interface Props {}

const SettingBottomSheetProvider: React.FC<Props> = props => {
  const {} = props

  const createListBottomSheetRef = useRef<BottomSheet>(null)

  return (
    <>
      <LongBottomSheetCommon ref={createListBottomSheetRef}>
        {/* <CreateList /> */}
      </LongBottomSheetCommon>
    </>
  )
}

export default SettingBottomSheetProvider
