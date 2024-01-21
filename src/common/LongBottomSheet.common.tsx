import React, { forwardRef, useCallback, useMemo } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'

interface LongBottomSheetCommonProps {
  children?: React.ReactNode
  snapPoint?: string[]
}

const LongBottomSheetCommon = forwardRef<
  BottomSheet,
  LongBottomSheetCommonProps
>(({ children, snapPoint }, ref) => {
  const snapPoints = useMemo(() => snapPoint || ['90%'], [])

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        disappearsOnIndex={-1}
      />
    ),
    []
  )

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      // backgroundStyle={{ backgroundColor: themes.light.tertiary.hex }}
      handleIndicatorStyle={
        {
          // backgroundColor: themes.light.primary.hex
        }
      }>
      {children}
    </BottomSheet>
  )
})

export default LongBottomSheetCommon
