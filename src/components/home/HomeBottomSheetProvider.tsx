import React, { useRef, useState } from 'react'
import MyAlbum from '@/components/album/MyAlbum'
import PostSetting from '../addMemory/PostSetting'
import SelectFriend from '../addMemory/SelectFriend'
import EditDate from '@/components/addMemory/EditDate'
import CreateAlbum from '@/components/album/CreateAlbum'
import FilterAlbum from '@/components/album/FilterAlbum'
import AddMemory from '@/components/addMemory/AddMemory'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import EditTime from '../addMemory/EditTime'
import ReadMemory from '../readMemory/ReadMemory'
import PinPlace from '../addMemory/PinPlace'
import EditMemory from '../EditMemory/EditMemory'
import DeleteMemory from '../readMemory/DeleteMemory'
import ReadMemoryPinPlace from '../readMemory/ReadMemoryPinPlace'
import MapSearchBar from '../mapStory/MapSearchBar'
import FilterMap from '@/components/mapStory/FilterMap'
import AlbumIndividual from '../readAlbum/AlbumIndividual'

interface Props {
  addMemoryBottomSheetRef: React.RefObject<BottomSheetMethods>
  albumBottomSheetRef: React.RefObject<BottomSheetMethods>
  readMemoryBottomSheetRef: React.RefObject<BottomSheetMethods>
  mapSearchBarBottomSheetRef: React.RefObject<BottomSheetMethods>
  //mapBottomSheetRef: React.RefObject<BottomSheetMethods>
}

const HomeBottomSheetProvider: React.FC<Props> = props => {
  const [filterDate, setFilterDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  })

  const [mapDate, setMapDate] = useState({
    startDate: new Date(),
    endDate: new Date()
  })

  const {
    addMemoryBottomSheetRef,
    albumBottomSheetRef,
    readMemoryBottomSheetRef,
    mapSearchBarBottomSheetRef,
    //mapBottomSheetRef
  } = props

  const createAlbumBottomSheetRef = useRef<BottomSheet>(null)
  const filterAlbumBottomSheetRef = useRef<BottomSheet>(null)
  const editDateBottomSheetRef = useRef<BottomSheet>(null)
  const postSettingBottomSheetRef = useRef<BottomSheet>(null)
  const selectFriendBottomSheetRef = useRef<BottomSheet>(null)
  const editTimeBottomSheetRef = useRef<BottomSheet>(null)
  const pinPlaceBottomSheetRef = useRef<BottomSheet>(null)
  const filterDateStartBottomSheetRef = useRef<BottomSheet>(null)
  const filterDateEndBottomSheetRef = useRef<BottomSheet>(null)
  const editMemoryBottomSheetRef = useRef<BottomSheet>(null)
  const deleteMemoryBottomSheetRef = useRef<BottomSheet>(null)
  const readMemoryPinPlaceBottomSheetRef = useRef<BottomSheet>(null)
  const mapSearchBar = useRef<BottomSheet>(null)
  const filterMapBottomSheetRef = useRef<BottomSheet>(null)
  const mapDateStartBottomSheetRef = useRef<BottomSheet>(null)
  const mapDateEndBottomSheetRef = useRef<BottomSheet>(null)
  const albumListBottomSheetRef = useRef<BottomSheet>(null)

  const handleSaveDateRange = (selected_date: Date, type_filter: string) => {
    switch (type_filter) {
      case 'start':
        setFilterDate({ ...filterDate, startDate: selected_date })
        filterDateStartBottomSheetRef.current?.close()
        break
      case 'end':
        setFilterDate({ ...filterDate, endDate: selected_date })
        filterDateEndBottomSheetRef.current?.close()
        break
    }
  }

  return (
    <>
      <LongBottomSheetCommon ref={addMemoryBottomSheetRef}>
        <AddMemory
          handleEditDate={() => editDateBottomSheetRef.current?.expand()}
          handleEditTime={() => editTimeBottomSheetRef.current?.expand()}
          handleClose={() => addMemoryBottomSheetRef.current?.close()}
          handlePinPlace={() => pinPlaceBottomSheetRef.current?.expand()}
          handlePostSetting={() => postSettingBottomSheetRef.current?.expand()}
          handleSelectFriend={() =>
            selectFriendBottomSheetRef.current?.expand()
          }
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={albumBottomSheetRef}>
        <MyAlbum
          handlePress={() => createAlbumBottomSheetRef.current?.expand()}
          handleOpenAlbum={() => albumListBottomSheetRef.current?.expand()}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={createAlbumBottomSheetRef}>
        <CreateAlbum
          handlePress={() => filterAlbumBottomSheetRef.current?.expand()}
          handleCloseBottomSheet={() =>
            createAlbumBottomSheetRef.current?.close()
          }
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={editTimeBottomSheetRef} snapPoint={['50%']}>
        <EditTime
          handleClose={() => editTimeBottomSheetRef.current?.close()}
          handleSetTime={() => editTimeBottomSheetRef.current?.close()}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={filterAlbumBottomSheetRef}>
        <FilterAlbum
          handleClose={() => filterAlbumBottomSheetRef.current?.close()}
          handleSelectDateStart={() =>
            mapDateStartBottomSheetRef.current?.expand()
          }
          handleSelectDateEnd={() =>
            mapDateEndBottomSheetRef.current?.expand()
          }
          selectedDateEnd={filterDate.endDate}
          selectedDateStart={filterDate.startDate}
        />
      </LongBottomSheetCommon>

      {/* filter date start */}
      <LongBottomSheetCommon
        ref={filterDateStartBottomSheetRef}
        snapPoint={['50%']}>
        <EditDate
          type_filter="start"
          handleClose={() => editDateBottomSheetRef.current?.close()}
          handleSave={handleSaveDateRange}
        />
      </LongBottomSheetCommon>

      {/* filter date end */}
      <LongBottomSheetCommon
        ref={filterDateEndBottomSheetRef}
        snapPoint={['50%']}>
        <EditDate
          type_filter="end"
          handleClose={() => editDateBottomSheetRef.current?.close()}
          handleSave={handleSaveDateRange}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={editDateBottomSheetRef} snapPoint={['50%']}>
        <EditDate handleClose={() => editDateBottomSheetRef.current?.close()} />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon
        ref={postSettingBottomSheetRef}
        snapPoint={['50%']}>
        <PostSetting />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon
        ref={selectFriendBottomSheetRef}
        snapPoint={['50%', '70%']}>
        <SelectFriend />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={readMemoryBottomSheetRef}>
        <ReadMemory
          onEditMemoryPress={() => editMemoryBottomSheetRef.current?.expand()}
          onDeleteMemoryPress={() =>
            deleteMemoryBottomSheetRef.current?.expand()
          }
          handleReadPinPlace={() =>
            readMemoryPinPlaceBottomSheetRef.current?.expand()
          }
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={editMemoryBottomSheetRef}>
        <EditMemory
          handlePinPlace={() => pinPlaceBottomSheetRef.current?.expand()}
          handleClose={() => editMemoryBottomSheetRef.current?.close()}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon
        snapPoint={['50%', '60%', '70%', '80%']}
        ref={pinPlaceBottomSheetRef}>
        <PinPlace />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon
        snapPoint={['50%', '60%', '70%', '80%']}
        ref={readMemoryPinPlaceBottomSheetRef}>
        <ReadMemoryPinPlace />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon
        snapPoint={['50%']}
        ref={deleteMemoryBottomSheetRef}>
        <DeleteMemory
          handleClose={() => deleteMemoryBottomSheetRef.current?.close()}
          handleCloseReadMemory={() =>
            readMemoryBottomSheetRef.current?.close()
          }
        />
      </LongBottomSheetCommon>
      
      {/*map bottom sheet */}
      <LongBottomSheetCommon ref={mapSearchBarBottomSheetRef}>
        <MapSearchBar
          handleOpenFilter={() => console.log("Logging")}
          handleCloseBottomSheet={() =>
            mapSearchBarBottomSheetRef.current?.close()
          }
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={filterMapBottomSheetRef}>
        {/* <FilterMap
          handleClose={() => filterMapBottomSheetRef.current?.close()}
          handleSelectDateStart={() =>
            mapDateStartBottomSheetRef.current?.expand()
          }
          handleSelectDateEnd={() =>
            mapDateEndBottomSheetRef.current?.expand()
          }
          selectedDateEnd={mapDate.endDate}
          selectedDateStart={mapDate.startDate}
        /> */}
      </LongBottomSheetCommon>

      {/* map date start */}
      <LongBottomSheetCommon
        ref={mapDateStartBottomSheetRef}
        snapPoint={['50%']}>
        <EditDate
          type_filter="start"
          handleClose={() => editDateBottomSheetRef.current?.close()}
          handleSave={handleSaveDateRange}
        />
      </LongBottomSheetCommon>

      {/* map date end */}
      <LongBottomSheetCommon
        ref={mapDateEndBottomSheetRef}
        snapPoint={['50%']}>
        <EditDate
          type_filter="end"
          handleClose={() => editDateBottomSheetRef.current?.close()}
          handleSave={handleSaveDateRange}
        />
      </LongBottomSheetCommon>
      
      <LongBottomSheetCommon ref={albumListBottomSheetRef}>
        <AlbumIndividual />
      </LongBottomSheetCommon>
    </>
  )
}

export default HomeBottomSheetProvider
