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

interface Props {
  addMemoryBottomSheetRef: React.RefObject<BottomSheetMethods>
  albumBottomSheetRef: React.RefObject<BottomSheetMethods>
}

const HomeBottomSheetProvider: React.FC<Props> = props => {
  const { addMemoryBottomSheetRef, albumBottomSheetRef } = props

  const createAlbumBottomSheetRef = useRef<BottomSheet>(null)
  const filterAlbumBottomSheetRef = useRef<BottomSheet>(null)
  const editDateBottomSheetRef = useRef<BottomSheet>(null)
  const postSettingBottomSheetRef = useRef<BottomSheet>(null)
  const selectFriendBottomSheetRef = useRef<BottomSheet>(null)

  return (
    <>
      <LongBottomSheetCommon ref={addMemoryBottomSheetRef}>
        <AddMemory
          handleEditDate={() => editDateBottomSheetRef.current?.expand()}
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

      <LongBottomSheetCommon ref={filterAlbumBottomSheetRef}>
        <FilterAlbum
          handleClose={() => filterAlbumBottomSheetRef.current?.close()}
        />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={editDateBottomSheetRef}>
        <EditDate handleClose={() => editDateBottomSheetRef.current?.close()} />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={postSettingBottomSheetRef}>
        <PostSetting />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={selectFriendBottomSheetRef}>
        <SelectFriend />
      </LongBottomSheetCommon>
    </>
  )
}

export default HomeBottomSheetProvider
