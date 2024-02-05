import React, { useRef } from 'react'
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
import addMemoryStore from '@/stores/AddMemoryStore'

interface Props {
  addMemoryBottomSheetRef: React.RefObject<BottomSheetMethods>
  albumBottomSheetRef: React.RefObject<BottomSheetMethods>
  readMemoryBottomSheetRef: React.RefObject<BottomSheetMethods>
}

const HomeBottomSheetProvider: React.FC<Props> = props => {
  const {
    addMemoryBottomSheetRef,
    albumBottomSheetRef,
    readMemoryBottomSheetRef
  } = props

  const createAlbumBottomSheetRef = useRef<BottomSheet>(null)
  const filterAlbumBottomSheetRef = useRef<BottomSheet>(null)
  const editDateBottomSheetRef = useRef<BottomSheet>(null)
  const postSettingBottomSheetRef = useRef<BottomSheet>(null)
  const selectFriendBottomSheetRef = useRef<BottomSheet>(null)
  const editTimeBottomSheetRef = useRef<BottomSheet>(null)

  const handleSetTime = (time: Date) => {
    addMemoryStore.hours = time.getHours()
    addMemoryStore.minutes = time.getMinutes()
    editTimeBottomSheetRef.current?.close()
  }

  return (
    <>
      <LongBottomSheetCommon ref={addMemoryBottomSheetRef}>
        <AddMemory
          handleEditDate={() => editDateBottomSheetRef.current?.expand()}
          handleEditTime={() => editTimeBottomSheetRef.current?.expand()}
          handleClose={() => addMemoryBottomSheetRef.current?.close()}
          handlePostSetting={() => postSettingBottomSheetRef.current?.expand()}
          handleSelectFriend={() =>
            selectFriendBottomSheetRef.current?.expand()
          }
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={albumBottomSheetRef}>
        <MyAlbum
          handlePress={() => createAlbumBottomSheetRef.current?.expand()}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={createAlbumBottomSheetRef}>
        <CreateAlbum
          handlePress={() => filterAlbumBottomSheetRef.current?.expand()}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={editTimeBottomSheetRef} snapPoint={['50%']}>
        <EditTime
          handleClose={() => editTimeBottomSheetRef.current?.close()}
          handleSetTime={handleSetTime}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={filterAlbumBottomSheetRef}>
        <FilterAlbum
          handleClose={() => filterAlbumBottomSheetRef.current?.close()}
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
        <ReadMemory />
      </LongBottomSheetCommon>
    </>
  )
}

export default HomeBottomSheetProvider
