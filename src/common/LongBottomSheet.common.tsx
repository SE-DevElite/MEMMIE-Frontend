import { Text, View } from 'react-native'
import React, { forwardRef, useCallback, useMemo } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'

interface LongBottomSheetCommonProps {
  children?: React.ReactNode
}

const LongBottomSheetCommon = forwardRef<
  BottomSheet,
  LongBottomSheetCommonProps
>(({ children }, ref) => {
  const snapPoints = useMemo(() => ['90%'], [])

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
