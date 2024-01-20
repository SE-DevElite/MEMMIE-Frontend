import React, { forwardRef, useCallback, useMemo } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { themes } from '@/common/themes/themes'
import MonthYearPicker from './MonthYearPicker'

interface BottomSheetPickerProps {
  handleChangeMonth: (itemValue: string) => void
  handleChangeYear: (itemValue: string) => void
  selectedMonth: string
  selectedYear: string
}

const BottomSheetPicker = forwardRef<BottomSheet, BottomSheetPickerProps>(
  (
    { handleChangeMonth, handleChangeYear, selectedMonth, selectedYear },
    ref
  ) => {
    const snapPoints = useMemo(() => ['40%'], [])

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
        handleIndicatorStyle={{ backgroundColor: themes.light.primary.hex }}>
        <MonthYearPicker
          onChangeMonth={handleChangeMonth}
          onChangeYear={handleChangeYear}
          monthValue={selectedMonth}
          yearValue={selectedYear}
        />
      </BottomSheet>
    )
  }
)

export default BottomSheetPicker
