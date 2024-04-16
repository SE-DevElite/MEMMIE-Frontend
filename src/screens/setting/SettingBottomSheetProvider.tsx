import React from 'react'
import LongBottomSheetCommon from '@/common/LongBottomSheet.common'
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import CreateList from '../../components/setting/CreateList'
import { User } from '@/interface/friend_response'
import UpdateListFriendList from '@/components/setting/UpdateListFriendList'

interface Props {
  createListBottomSheetRef: React.RefObject<BottomSheet>
  updateListBottomSheetRef: React.RefObject<BottomSheet>
  friend: User[]
  select_friendList_id: string
  select_friendList_user: User[]
  select_friendList_name: string
}

const SettingBottomSheetProvider: React.FC<Props> = props => {
  const {
    createListBottomSheetRef,
    updateListBottomSheetRef,
    friend,
    select_friendList_id,
    select_friendList_user,
    select_friendList_name
  } = props

  const handleCreateList = () => {
    createListBottomSheetRef.current?.close()
  }

  return (
    <>
      <LongBottomSheetCommon ref={createListBottomSheetRef}>
        <CreateList friend={friend} onCreateList={handleCreateList} />
      </LongBottomSheetCommon>

      <LongBottomSheetCommon ref={updateListBottomSheetRef}>
        <UpdateListFriendList
          AllFriend={friend}
          friendList_id={select_friendList_id}
          friend={select_friendList_user}
          friendList_name={select_friendList_name}
        />
      </LongBottomSheetCommon>
    </>
  )
}

export default SettingBottomSheetProvider
