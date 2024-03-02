import React, { useRef, useState } from 'react'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import FilterMap from '@/components/mapStory/FilterMap'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import EditDate from '../addMemory/EditDate'

interface Props {
  filterMapBottomSheetRef: React.RefObject<BottomSheetMethods>
}

const MapStoryBottomSheetProvider: React.FC<Props> = props => {
  const { filterMapBottomSheetRef } = props
  const mapDateEndBottomSheetRef = useRef<BottomSheet>(null)
  const mapDateStartBottomSheetRef = useRef<BottomSheet>(null)

  const [mapDate, setMapDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  })

  return (
    <>
      <LongBottomSheetCommon ref={filterMapBottomSheetRef} snapPoint={['70%']}>
        <FilterMap
          handleClose={() => filterMapBottomSheetRef.current?.close()}
          handleSelectDateStart={() =>
            mapDateStartBottomSheetRef.current?.expand()
          }
          handleSelectDateEnd={() => mapDateEndBottomSheetRef.current?.expand()}
          selectedDateEnd={mapDate.endDate}
          selectedDateStart={mapDate.startDate}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon
        ref={mapDateStartBottomSheetRef}
        snapPoint={['50%']}>
        <EditDate
          type_filter="start"
          handleClose={() => {}}
          handleSave={() => {}}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={mapDateEndBottomSheetRef} snapPoint={['50%']}>
        <EditDate
          type_filter="end"
          handleClose={() => {}}
          handleSave={() => {}}
        />
      </LongBottomSheetCommon>
    </>
  )
}

export default MapStoryBottomSheetProvider
