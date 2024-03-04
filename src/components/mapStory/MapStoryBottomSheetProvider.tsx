import React, { useRef, useState } from 'react'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import FilterMap from '@/components/mapStory/FilterMap'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import EditDate from '../addMemory/EditDate'
import { getAccessToken } from '@/helpers/TokenHandler'
import { RequestWithToken } from '@/api/DefaultRequest'

interface Props {
  filterMapBottomSheetRef: React.RefObject<BottomSheetMethods>
}

type ReqeustParams = {
  start_date: string
  end_date: string
  mood?: string
  weather?: string
}

const MapStoryBottomSheetProvider: React.FC<Props> = props => {
  const { filterMapBottomSheetRef } = props
  const mapDateEndBottomSheetRef = useRef<BottomSheet>(null)
  const mapDateStartBottomSheetRef = useRef<BottomSheet>(null)
  const [waitApplyingFilter, setWaitApplyingFilter] = useState(false)

  const [mapDate, setMapDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  })

  const handleSave = (date: Date, type_filter: string) => {
    if (type_filter === 'start') {
      setMapDate({ ...mapDate, startDate: date })
    } else {
      setMapDate({ ...mapDate, endDate: date })
    }
  }

  const WeatherValueFilter = (mood: number) => {
    const weatherMapIndex = {
      0: 'sunny',
      1: 'cloudy',
      2: 'rainy',
      3: 'snowy'
    }

    return weatherMapIndex[mood as 0 | 1 | 2 | 3]
  }

  const MoodValueFilter = (mood: number) => {
    const moodMapIndex = {
      0: 'happy',
      1: 'funny',
      2: 'nah',
      3: 'sad'
    }

    return moodMapIndex[mood as 0 | 1 | 2 | 3]
  }

  const handleFilterSubmit = async (
    mood: number | null,
    weather: number | null
  ) => {
    setWaitApplyingFilter(true)
    const token = await getAccessToken()

    const params: ReqeustParams = {
      start_date: mapDate.startDate.toISOString(),
      end_date: mapDate.endDate.toISOString()
    }

    if (mood !== null) {
      const moodValue = MoodValueFilter(mood)
      params['mood'] = moodValue
    }

    if (weather !== null) {
      const weatherValue = WeatherValueFilter(weather)
      params['weather'] = weatherValue
    }

    console.log(params)

    const res = await RequestWithToken(token as string)
      .get('/memories/filter', { params })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    setWaitApplyingFilter(false)
  }

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
          handleSubmit={handleFilterSubmit}
          waitApplyingFilter={waitApplyingFilter}
        />
      </LongBottomSheetCommon>

      {/* strart  */}
      <LongBottomSheetCommon
        ref={mapDateStartBottomSheetRef}
        snapPoint={['50%']}>
        <EditDate
          type_filter="start"
          handleClose={() => mapDateStartBottomSheetRef.current?.close()}
          handleSave={handleSave}
          max_date={new Date()}
          // min_date={new Date()}
        />
      </LongBottomSheetCommon>

      {/* end  */}
      <LongBottomSheetCommon ref={mapDateEndBottomSheetRef} snapPoint={['50%']}>
        <EditDate
          type_filter="end"
          handleClose={() => mapDateEndBottomSheetRef.current?.close()}
          handleSave={handleSave}
          // max_date={new Date()}
          min_date={mapDate.startDate}
        />
      </LongBottomSheetCommon>
    </>
  )
}

export default MapStoryBottomSheetProvider
